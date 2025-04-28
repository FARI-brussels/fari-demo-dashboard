import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true,
    port: 3000, // Specify the port
    open: true, // Automatically open the app in the browser
  },
  build:
    mode === 'lib'
      ? {
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'FariDemoView',
            fileName: 'fari-demo-view',
            formats: ['es', 'cjs'],
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue',
              },
              assetFileNames: 'fari-demo-view.[ext]',
            },
          },
          outDir: 'dist-lib', // Separate folder for library
          cssCodeSplit: false,
        }
      : {
          outDir: 'dist',
          assetsDir: 'assets',
        },
  define: {
    'import.meta.env.VITE_FULLSCREEN': JSON.stringify(process.env.VITE_FULLSCREEN || 'false'),
  },
}))
