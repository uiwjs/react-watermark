Watermark.js
===

JavaScript library for generating image watermarks using canvas.

## Install

```bash
npm i @uiw/watermark.js
```

## Using

```js
import Watermark from '@uiw/watermark.js';

const watermark = new Watermark({
  content: 'Hello Watermark!'
});
watermark.create().then((mark) => {
  console.log('output:', mark)
})
.catch((err) => {
  console.log(err, 'err')
})
```

Or manually download and link `watermark.js` in your HTML, It can also be downloaded via [UNPKG](https://unpkg.com/browse/@uiw/watermark.js/):

CDN: [UNPKG](https://unpkg.com/@uiw/watermark.js/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/@uiw/watermark.js/) | [Githack](https://raw.githack.com/uiwjs/watermark.js/gh-pages/watermark.min.js) | [Statically](https://cdn.statically.io/gh/uiwjs/watermark.js/gh-pages/watermark.min.js)

```html
<style>
  #mark {
    z-index: 9;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-size: 332px;
    pointer-events: none;
    background-repeat: repeat;
  }
</style>
<body style="position: relative; min-height: 100vh;">
  <div id="mark"></div>
  <script src="https://unpkg.com/@uiw/watermark.js/dist/watermark.min.js"></script>
  <script>
    const $dom = document.querySelector('div#mark');
    const watermark = new Watermark({
      content: 'Hello Watermark!'
    });
    watermark.create().then((mark) => {
      $dom.style.backgroundImage = `url(${mark})`
    })
    .catch((err) => {
      console.log(err, 'err')
    })
  </script>
</body>
```

## API

```ts
export interface WatermarkOptions {
  content?: string;
  imgage?: string;
  rotate?: number;
  image?: string;
  gapX?: number;
  gapY?: number;
  width?: number;
  height?: number;
  offsetLeft?: number;
  offsetTop?: number;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
  fontColor?: string;
  fontStyle?: CanvasFillStrokeStyles['fillStyle'];
}
export default class Watermark {
  option: WatermarkOptions;
  constructor(options: WatermarkOptions);
  create(): Promise<string>;
}
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-watermark/graphs/contributors">
  <img src="https://uiwjs.github.io/react-watermark/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/uiwjs/github-action-contributors).

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).