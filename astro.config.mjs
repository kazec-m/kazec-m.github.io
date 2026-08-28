// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: リポジトリ名に合わせて site / base を設定してください。
// 例: リポジトリ名が "portfolio" なら
//   site: 'https://kazec-m.github.io',
//   base: '/portfolio',
// 独自ドメインを使う場合は base は不要です。
export default defineConfig({
  site: 'https://kazec-m.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
