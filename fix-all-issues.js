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

// 修复空代码块 - 给孤立的 ```text 添加内容或移除
function fixEmptyCodeBlocks(content) {
  let fixed = false;
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // 检查是否是空的 ```text 代码块
    if (trimmedLine === '```text' || trimmedLine === '```') {
      // 检查下一个非空行
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') {
        j++;
      }
      
      // 如果下一行还是 ``` 或者是文件末尾，说明是空代码块
      if (j >= lines.length || lines[j].trim().startsWith('```')) {
        // 删除这个空代码块标记
        fixed = true;
        continue; // 跳过这一行，不添加到新内容中
      }
    }
    
    newLines.push(line);
  }
  
  return { content: newLines.join('\n'), fixed };
}

// 转义类 HTML 标签
function fixHtmlLikeTags(content) {
  let fixed = false;
  const lines = content.split('\n');
  const newLines = [];
  let inCodeBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // 检查是否在代码块内
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      newLines.push(line);
      continue;
    }
    
    // 如果不在代码块内，转义类似 <UPPERCASE> 的模式
    if (!inCodeBlock) {
      const htmlTagRegex = /(?<!\\)<([A-Z][A-Z0-9_/-]+)(?<!\\)>/g;
      
      if (htmlTagRegex.test(line)) {
        line = line.replace(htmlTagRegex, '\\<$1\\>');
        fixed = true;
      }
    }
    
    newLines.push(line);
  }
  
  return { content: newLines.join('\n'), fixed };
}

// 主函数 - 修复所有问题
function main() {
  const docsDir = path.join(__dirname, 'docs');
  const markdownFiles = findMarkdownFiles(docsDir);
  
  console.log('🔧 开始修复所有 Markdown 文件...\n');
  console.log(`找到 ${markdownFiles.length} 个 Markdown 文件\n`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  markdownFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let newContent = content;
      let fileFixed = false;
      
      // 修复空代码块
      const emptyCodeResult = fixEmptyCodeBlocks(newContent);
      if (emptyCodeResult.fixed) {
        newContent = emptyCodeResult.content;
        fileFixed = true;
      }
      
      // 修复类 HTML 标签
      const htmlResult = fixHtmlLikeTags(newContent);
      if (htmlResult.fixed) {
        newContent = htmlResult.content;
        fileFixed = true;
      }
      
      // 如果内容有变化，写入文件
      if (fileFixed) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        fixedCount++;
        console.log(`✓ 修复：${path.relative(docsDir, filePath)}`);
      }
    } catch (error) {
      errorCount++;
      console.error(`✗ 错误：${path.relative(docsDir, filePath)} - ${error.message}`);
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ 修复完成摘要:');
  console.log(`   修复文件数：${fixedCount}`);
  console.log(`   错误数：${errorCount}`);
  console.log('='.repeat(60));
  console.log('\n💡 建议再次运行检查确认所有问题已解决:');
  console.log('   node check-markdown-issues.js\n');
}

main();
