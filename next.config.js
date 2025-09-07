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
  
  // 禁用webpack缓存以避免大文件问题
  webpack: (config, { isServer }) => {
    // 完全禁用webpack缓存
    config.cache = false;
    
    // 禁用持久化缓存
    if (config.cache && config.cache.type) {
      config.cache = false;
    }
    
    return config;
  },
}

module.exports = nextConfig
