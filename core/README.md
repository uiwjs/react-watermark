Watermark.js
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Build & Deploy](https://github.com/uiwjs/react-watermark/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-watermark/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-watermark/badges.svg)](https://uiwjs.github.io/react-watermark/coverage/lcov-report/)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/watermark.js.svg?style=flat)](https://www.npmjs.com/package/@uiw/watermark.js)
[![NPM Version](https://img.shields.io/npm/v/@uiw/watermark.js.svg)](https://www.npmjs.com/package/@uiw/watermark.js)

JavaScript library for generating image watermarks using canvas. support [`react`](https://www.npmjs.com/package/@uiw/react-watermark).

## Install

```bash
npm i @uiw/watermark.js
# Or
npm i @uiw/react-watermark
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

## Used in React

```jsx
import React from "react";
import Watermark from '@uiw/react-watermark';

const style = { width: '100%', maxWidth: '100%', height: 200, display: 'block' };
const text = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.`;

export default function App() {
  return (
    <Watermark
      content="UIW Watermark"
      style={{ background: '#fff' }}
    >
      <textarea style={style} spellCheck={false} defaultValue={text} />
    </Watermark>
  );
}
```

## API

```ts
export interface WatermarkOptions {
  /** watermark text content */
  content?: string | string[];
  /**
   * When the watermark is drawn, the rotation angle, in `°`. @default `-22`
   */
  rotate?: number;
  /**
   * High-definition print image source, for high-definition screen display,
   * it is recommended to use 2x or 3x image, and priority to use image rendering watermark.
   */
  image?: string;
  /** Horizontal spacing between watermarks. @default `212` */
  gapX?: number;
  /** vertical spacing between watermarks. @default `222` */
  gapY?: number;
  /** width of watermark. @default `120` */
  width?: number;
  /** height of watermark @default `64` */
  height?: number;
  /**
   * The vertical offset of the watermark drawn on the canvas.
   * Normally, the watermark is drawn in the middle position, ie `offsetTop = gapY / 2`
   */
  offsetLeft?: number;
  /**
   * The horizontal offset of the watermark drawn on the canvas, under normal circumstances,
   * the watermark is drawn in the middle position, ie `offsetTop = gapX / 2`
   */
  offsetTop?: number;
  /** text size @default `16` */
  fontSize?: number;
  /** text family @default `sans-serif` */
  fontFamily?: string;
  /** text weight @default `normal` */
  fontWeight?: 'normal' | 'light' | 'weight' | number;
  /** text color @default `rgba(0,0,0,.15)` */
  fontColor?: string;
  /** text style */
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