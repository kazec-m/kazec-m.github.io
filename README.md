# kazec-m.github.io
 
Mariko Kazetaniのポートフォリオサイトです。
 
**公開URL** → https://kazec-m.github.io
 
![About](./screenshot-about.png)
![Work](./screenshot-work.png)
<!-- 撮れたら、リポジトリ直下に screenshot-about.png / screenshot-work.png として置いてください -->
<!-- Workは1ビューポート分ではなく、1プロジェクト分(動画・説明・タグまで)が写る位置までスクロールしてから撮影 -->
 
## 使用技術
 
- [Astro](https://astro.build)
- Tailwind CSS
- GitHub Actions(GitHub Pagesへの自動デプロイ)
## 設計意図
 
和紙のような温かみのある配色と、明朝体・ゴシック体を絞って使うことで、静かで落ち着いた印象を意識しています。About・CVページはヘッダー込みで画面の高さ(100svh)に固定し、スクロールなしで一目で内容が把握できるようにしています(Workページのみ、プロジェクトごとに縦スクロールする構成です)。
 
## ローカルでの動かし方
 
```bash
npm install
npm run dev
```
 
`http://localhost:4321` で確認できます。
 
## License
 
MIT