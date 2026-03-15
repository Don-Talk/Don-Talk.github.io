/**
 * 批量修复缺失图片引用
 * 将缺失的图片引用替换为 HTML 注释
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔧 开始修复缺失的图片引用...\n');

// 查找所有 Markdown 文件
function findMarkdownFiles(dir) {
  const results = [];
  const items = readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.name === '.vuepress') continue;
    
    if (item.isDirectory()) {
      results.push(...findMarkdownFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// 修复文件中的图片引用
function fixImageReferences(content, baseDir) {
  let fixed = false;
  let count = 0;
  
  // 匹配 HTML img 标签
  const htmlImgRegex = /<img\s+src=["']([^"']+)["'][^>]*>/g;
  
  content = content.replace(htmlImgRegex, (match, imagePath) => {
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return match; // 跳过外部图片
    }
    
    const fullPath = join(baseDir, imagePath);
    if (!existsSync(fullPath)) {
      fixed = true;
      count++;
      const imageName = imagePath.split('/').pop();
      return `<!-- 图片缺失：${imageName} -->`;
    }
    
    return match;
  });
  
  // 匹配 Markdown 图片语法
  const mdImgRegex = /!\[.*?\]\((.*?)\)/g;
  
  content = content.replace(mdImgRegex, (match, imagePath) => {
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return match;
    }
    
    const fullPath = join(baseDir, imagePath);
    if (!existsSync(fullPath)) {
      fixed = true;
      count++;
      const imageName = imagePath.split('/').pop();
      return `<!-- 图片缺失：${imageName} -->`;
    }
    
    return match;
  });
  
  return { content, fixed, count };
}

// 主流程
const docsDir = join(__dirname, 'docs');
const mdFiles = findMarkdownFiles(docsDir);

let totalFixed = 0;
let filesWithFixes = 0;

for (const mdFile of mdFiles) {
  const content = readFileSync(mdFile, 'utf-8');
  const baseDir = dirname(mdFile);
  const result = fixImageReferences(content, baseDir);
  
  if (result.fixed) {
    writeFileSync(mdFile, result.content, 'utf-8');
    console.log(`✅ 修复：${mdFile}`);
    console.log(`   修复了 ${result.count} 个图片引用\n`);
    totalFixed += result.count;
    filesWithFixes++;
  }
}

console.log('='.repeat(60));
console.log('📊 修复完成摘要:');
console.log(`   修复的文件数：${filesWithFixes}`);
console.log(`   修复的图片引用数：${totalFixed}`);
console.log('='.repeat(60));

if (totalFixed > 0) {
  console.log('\n💡 建议:');
  console.log('   1. 检查并补充缺失的图片资源到对应的 assets 目录');
  console.log('   2. 或者确认这些图片是否可以删除\n');
} else {
  console.log('\n✅ 所有图片引用都有效！\n');
}
