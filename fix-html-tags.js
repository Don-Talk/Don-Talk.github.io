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

// 修复可能被误解析为 HTML 标签的尖括号
function fixHtmlLikeTags(content) {
  let fixed = false;
  
  // 匹配类似 <WORD> 或 <WORD> 的模式（不在代码块内）
  // 转义这些尖括号，避免被 Vue 编译器误解析
  // 使用负向前瞻确保不在 ``` 代码块内
  
  // 简单方法：直接转义所有类似 <ABC> 的模式为 \<ABC\>
  // 但要注意不要转义已经正确的代码块
  
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
    
    // 如果不在代码块内，转义类似 <UPPERCASE_WORD> 的模式
    if (!inCodeBlock) {
      // 匹配 <WORD> 模式，其中 WORD 是大写字母、数字、下划线、连字符的组合
      const htmlTagRegex = /<([A-Z][A-Z0-9_-]*)>/g;
      if (htmlTagRegex.test(line)) {
        line = line.replace(htmlTagRegex, '\\<$1\\>');
        fixed = true;
      }
    }
    
    newLines.push(line);
  }
  
  return { content: newLines.join('\n'), fixed };
}

// 主函数
function main() {
  const docsDir = path.join(__dirname, 'docs');
  const markdownFiles = findMarkdownFiles(docsDir);
  
  console.log(`找到 ${markdownFiles.length} 个 Markdown 文件`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  markdownFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const result = fixHtmlLikeTags(content);
      
      if (result.fixed) {
        fs.writeFileSync(filePath, result.content, 'utf8');
        fixedCount++;
        console.log(`✓ 修复：${path.relative(docsDir, filePath)}`);
      }
    } catch (error) {
      errorCount++;
      console.error(`✗ 错误：${path.relative(docsDir, filePath)} - ${error.message}`);
    }
  });
  
  console.log(`\n完成！`);
  console.log(`修复了 ${fixedCount} 个文件`);
  console.log(`错误：${errorCount} 个文件`);
}

main();
