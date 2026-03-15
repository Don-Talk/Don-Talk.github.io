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

// 修复代码块未闭合的问题
function fixUnclosedCodeBlocks(content) {
  let fixed = false;
  const lines = content.split('\n');
  const newLines = [];
  let inCodeBlock = false;
  let codeBlockStart = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // 检查是否是代码块开始/结束标记
    if (trimmedLine.startsWith('```')) {
      if (!inCodeBlock) {
        // 代码块开始
        inCodeBlock = true;
        codeBlockStart = i;
        newLines.push(line);
      } else {
        // 代码块结束
        inCodeBlock = false;
        newLines.push(line);
      }
      continue;
    }
    
    // 如果在代码块内，正常添加
    if (inCodeBlock) {
      newLines.push(line);
    } else {
      // 如果不在代码块内，检查是否有类似 ```text 但没有闭合的情况
      // 检测孤立的 ```language 标记（后面紧跟的是另一个 ``` 或文本内容）
      if (trimmedLine.match(/^```\w+\s*$/) && i < lines.length - 1) {
        const nextLine = lines[i + 1].trim();
        // 如果下一行也是 ``` 开头或者是空行或是普通文本（不是代码内容）
        if (nextLine.startsWith('```') || nextLine === '' || !nextLine.match(/^\s*(from|import|def|class|public|private|var|let|const)/)) {
          // 这很可能是一个孤立的标记，改为普通文本
          newLines.push(line.replace(/^```(\w+)/, '`$1`'));
          fixed = true;
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }
  }
  
  // 如果最后还在代码块内，说明没有闭合，添加闭合标记
  if (inCodeBlock) {
    newLines.push('```');
    fixed = true;
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
      const result = fixUnclosedCodeBlocks(content);
      
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
