import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import sass from 'sass';

export default defineConfig({
  plugins: [vue(), ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //         @import "./src/assets/_global.scss";
  //       `
  //     }
  //   }
  // }
})