/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出 - 这是关键！
  output: 'export',
  
  // 保留您原有的图片配置，但移除 domains（静态导出不需要）
  images: {
    unoptimized: true,
  },
  
  // 保留您的优化配置
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // 添加尾随斜杠（推荐）
  trailingSlash: true,
}

module.exports = nextConfig
