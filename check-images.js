/**
 * 检查并修复 Markdown 文件中的图片引用问题
 * 1. 检查引用的图片是否存在
 * 2. 自动修复大小写不匹配的问题
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 获取命令行参数
const args = process.argv.slice(2);
const checkOnly = args.includes('--check') || args.includes('-c');
const fixMode = args.includes('--fix') || args.includes('-f');

console.log('🔍 开始检查 Markdown 文件中的图片引用...\n');

// 查找所有 Markdown 文件（递归）
function findMarkdownFiles(dir, excludeDirs = ['.vuepress', 'node_modules', '.git']) {
  const results = [];
  
  try {
    const items = readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = join(dir, item.name);
      
      // 跳过排除的目录
      if (item.isDirectory() && excludeDirs.includes(item.name)) {
        continue;
      }
      
      if (item.isDirectory()) {
        results.push(...findMarkdownFiles(fullPath, excludeDirs));
      } else if (item.isFile() && item.name.endsWith('.md')) {
        results.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ 读取目录失败：${dir}`);
  }
  
  return results;
}

// 提取 Markdown 文件中的图片引用
function extractImageReferences(content) {
  const references = [];
  
  // 匹配 Markdown 图片语法：![alt](path)
  const mdRegex = /!\[.*?\]\((.*?)\)/g;
  // 匹配 HTML img 标签：<img src="path" ...>
  const htmlRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
  
  let match;
  
  while ((match = mdRegex.exec(content)) !== null) {
    const path = match[1];
    if (!path.startsWith('http://') && !path.startsWith('https://')) {
      references.push({
        path: path,
        line: content.substring(0, match.index).split('\n').length,
        type: 'markdown'
      });
    }
  }
  
  while ((match = htmlRegex.exec(content)) !== null) {
    const path = match[1];
    if (!path.startsWith('http://') && !path.startsWith('https://')) {
      references.push({
        path: path,
        line: content.substring(0, match.index).split('\n').length,
        type: 'html'
      });
    }
  }
  
  return references;
}

// 在目录中查找图片文件（不区分大小写）
function findImageFile(baseDir, imagePath) {
  const fullPath = join(baseDir, imagePath);
  
  // 如果文件存在，直接返回
  if (existsSync(fullPath)) {
    return { found: true, path: fullPath, exactMatch: true };
  }
  
  // 尝试不区分大小写的匹配
  try {
    const dir = dirname(fullPath);
    const fileName = imagePath.split('/').pop();
    const items = readdirSync(dir);
    
    // 不区分大小写比较
    const matched = items.find(item => 
      item.toLowerCase() === fileName.toLowerCase()
    );
    
    if (matched) {
      return { 
        found: true, 
        path: join(dir, matched), 
        exactMatch: false,
        originalName: matched
      };
    }
  } catch (error) {
    // 忽略错误
  }
  
  return { found: false, path: fullPath, exactMatch: false };
}

// 主处理流程
let totalFiles = 0;
let totalImages = 0;
let missingImages = 0;
let caseMismatchImages = 0;

const docsDir = join(__dirname, 'docs');
const mdFiles = findMarkdownFiles(docsDir);

console.log(`找到 ${mdFiles.length} 个 Markdown 文件\n`);

for (const mdFile of mdFiles) {
  const content = readFileSync(mdFile, 'utf-8');
  const references = extractImageReferences(content);
  
  if (references.length === 0) continue;
  
  const baseDir = dirname(mdFile);
  let fileHasIssues = false;
  
  for (const ref of references) {
    totalImages++;
    const result = findImageFile(baseDir, ref.path);
    
    if (!result.found) {
      missingImages++;
      fileHasIssues = true;
      console.log(`❌ 缺失图片：${mdFile}`);
      console.log(`   第 ${ref.line} 行：${ref.path}`);
      console.log(`   类型：${ref.type}\n`);
    } else if (!result.exactMatch) {
      caseMismatchImages++;
      fileHasIssues = true;
      console.log(`⚠️  大小写不匹配：${mdFile}`);
      console.log(`   引用：${ref.path}`);
      console.log(`   实际：${result.originalName}`);
      console.log(`   第 ${ref.line} 行\n`);
      
      // 如果启用修复模式，自动修正
      if (fixMode) {
        const newPath = ref.path.split('/').slice(0, -1).join('/') + '/' + result.originalName;
        const newContent = content.replace(ref.path, newPath);
        writeFileSync(mdFile, newContent, 'utf-8');
        console.log(`   ✅ 已修复为：${newPath}\n`);
      }
    }
  }
  
  if (fileHasIssues) {
    totalFiles++;
  }
}

console.log('='.repeat(60));
console.log('📊 检查完成摘要:');
console.log(`   有问题的文件数：${totalFiles}`);
console.log(`   总图片引用数：${totalImages}`);
console.log(`   缺失的图片数：${missingImages}`);
console.log(`   大小写不匹配：${caseMismatchImages}`);
console.log('='.repeat(60));

if (missingImages > 0) {
  console.log('\n💡 建议:');
  console.log('   1. 检查 assets 目录是否包含所有引用的图片');
  console.log('   2. 确认图片文件名大小写是否正确');
  console.log('   3. 运行命令修复大小写问题：node check-images.js --fix\n');
} else if (caseMismatchImages > 0) {
  console.log('\n💡 运行以下命令自动修复大小写问题:');
  console.log('   node check-images.js --fix\n');
} else {
  console.log('\n✅ 所有图片引用正常！\n');
}

process.exit(missingImages > 0 ? 1 : 0);
