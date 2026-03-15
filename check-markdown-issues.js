import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 递归查找所有 Markdown 文件
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// 检查并修复类 HTML 标签（类似 <WORD> 的模式）
function fixHtmlLikeTags(content, filePath) {
  let fixed = false;
  const lines = content.split('\n');
  const newLines = [];
  let inCodeBlock = false;
  const issues = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const originalLine = line;
    
    // 检查是否在代码块内
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      newLines.push(line);
      continue;
    }
    
    // 如果不在代码块内，检查并转义类似 <UPPERCASE> 的模式
    if (!inCodeBlock) {
      // 匹配 <WORD> 模式，其中 WORD 包含大写字母、数字、下划线、连字符、斜杠
      // 但要排除已经是转义的 \<WORD\>
      const htmlTagRegex = /(?<!\\)<([A-Z][A-Z0-9_/-]+)(?<!\\)>/g;
      
      if (htmlTagRegex.test(line)) {
        const matches = [...line.matchAll(htmlTagRegex)];
        matches.forEach(match => {
          const tag = match[1];
          issues.push({
            line: i + 1,
            content: line.trim(),
            issue: `发现类 HTML 标签：<${tag}>`
          });
        });
        
        // 转义这些标签
        line = line.replace(htmlTagRegex, '\\<$1\\>');
        fixed = true;
      }
    }
    
    newLines.push(line);
  }
  
  if (issues.length > 0) {
    console.log(`\n⚠️  ${path.basename(filePath)}:`);
    issues.forEach(issue => {
      console.log(`   第${issue.line}行：${issue.issue}`);
      console.log(`     内容：${issue.content}`);
    });
  }
  
  return { content: newLines.join('\n'), fixed };
}

// 检查空代码块
function checkEmptyCodeBlocks(content, filePath) {
  const issues = [];
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const trimmedLine = lines[i].trim();
    if (trimmedLine === '```' || trimmedLine.match(/^```\w*\s*$/)) {
      // 检查下一个非空行
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') {
        j++;
      }
      
      // 如果下一行还是 ``` 或者是空行结束，说明是空代码块
      if (j >= lines.length || lines[j].trim().startsWith('```')) {
        issues.push({
          line: i + 1,
          content: trimmedLine,
          issue: '空代码块或缺少语言标识'
        });
      }
    }
  }
  
  if (issues.length > 0) {
    console.log(`\n⚠️  ${path.basename(filePath)}:`);
    issues.forEach(issue => {
      console.log(`   第${issue.line}行：${issue.issue}`);
      console.log(`     内容：${issue.content}`);
    });
  }
  
  return issues.length > 0;
}

// 主函数 - 只检查不修复
function main() {
  const docsDir = path.join(__dirname, 'docs');
  const markdownFiles = findMarkdownFiles(docsDir);
  
  console.log('🔍 开始检查所有 Markdown 文件...\n');
  console.log(`找到 ${markdownFiles.length} 个 Markdown 文件\n`);
  
  let totalIssues = 0;
  let filesWithIssues = 0;
  
  markdownFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // 检查类 HTML 标签
      const htmlResult = fixHtmlLikeTags(content, filePath);
      
      // 检查空代码块
      const hasEmptyCodeBlocks = checkEmptyCodeBlocks(content, filePath);
      
      if (htmlResult.fixed || hasEmptyCodeBlocks) {
        filesWithIssues++;
        if (htmlResult.fixed) {
          totalIssues++;
        }
        if (hasEmptyCodeBlocks) {
          totalIssues++;
        }
      }
    } catch (error) {
      console.error(`✗ 错误：${path.relative(docsDir, filePath)} - ${error.message}`);
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 检查完成摘要:');
  console.log(`   发现问题文件数：${filesWithIssues}`);
  console.log(`   问题总数：${totalIssues}`);
  console.log('='.repeat(60));
  
  if (filesWithIssues > 0) {
    console.log('\n💡 建议运行以下命令自动修复:');
    console.log('   node fix-all-issues.js\n');
  }
}

main();
