## Upgrades

- Refactor folder structure
- Add vite to the project
- Use public folder to store some static files
- Add `type="module"` to some non minified scripts for vite to be able ton bundle and optimize them
- Other scripts like jquery and owl carousel are left as they are, because they are already minified, optimized and
  placed at the end of body tag. Also they depend on jquery so they can't be async
- Add `vite-plugin-image-optimizer` for image and vector graphics optimization/compression
- Any script tag with `type="module"` is treated as a JavaScript module and is deferred by default, so usage
  of `main.js` and `contact.js` is already deferred by being builded and optimized by vite
- Add `loading="lazy"` to all images not intended to be on page landing view (for example the first carousel image and
  the two special offer ones in home page are set to `eager`)