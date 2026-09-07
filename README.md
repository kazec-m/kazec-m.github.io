# kazec-m.github.io
 
Mariko Kazetaniのポートフォリオサイトです。
 
**公開URL** → https://kazec-m.github.io
<table>
  <tr>
    <td><img src="./screenshot-about.png" width="45%" alt="About"></td>
    <td><img src="./screenshot-work.png" width="45%" alt="Work"></td>
  </tr>
</table>
 
## 使用技術
 
- [Astro](https://astro.build)
- Tailwind CSS
- GitHub Actions(GitHub Pagesへの自動デプロイ)
## 設計意図
 
About・CVページはヘッダー込みで画面の高さ(100svh)に固定し、スクロールなしで一目で内容が把握できるようにしています(Workページのみ、プロジェクトごとに縦スクロールする構成です)。
 
## ローカルでの動かし方
 
```bash
npm install
npm run dev
```
 
`http://localhost:4321` で確認できます。
 
## License
 
MIT