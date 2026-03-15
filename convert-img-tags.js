/**
 * 批量将 HTML img 标签转换为 Markdown 图片语法
 */
import { readFileSync, writeFileSync } from 'fs';

const filePath = process.argv[2];

if (!filePath) {
  console.error('请提供文件路径');
  process.exit(1);
}

console.log(`🔧 开始处理文件：${filePath}\n`);

let content = readFileSync(filePath, 'utf-8');
let count = 0;

// 匹配 HTML img 标签并转换为 Markdown 语法
content = content.replace(
  /<img\s+src=["']([^"']+)["']\s+alt=["']([^"']*)["'][^>]*>/g,
  (match, src, alt) => {
    count++;
    return `![${alt}](${src})`;
  }
);

if (count > 0) {
  writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ 成功转换 ${count} 个图片引用\n`);
} else {
  console.log('ℹ️  没有找到需要转换的图片引用\n');
}
