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

// 修复空代码块
function fixEmptyCodeBlocks(content) {
  let fixed = false;
  
  // 匹配空的代码块（只有 ``` 没有语言标识）
  // 使用多行模式，匹配 ``` 后面直接跟换行的情况
  const regex = /^```(\r?\n)/gm;
  
  const newContent = content.replace(regex, '```text$1');
  
  if (newContent !== content) {
    fixed = true;
  }
  
  return { content: newContent, fixed };
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
      const result = fixEmptyCodeBlocks(content);
      
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
