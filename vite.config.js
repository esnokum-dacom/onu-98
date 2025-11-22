import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/Cont/**/*',
          dest: 'src/Cont',
          flatten: false
        },
        {
          src: 'src/Props/**/*',
          dest: 'src/Props',
          flatten: false
        },
        {
          src: 'Style.css',
          dest: '.'
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html')
    },
    assetsDir: 'assets',
    outDir: 'dist'
  },
  publicDir: 'public'
});

