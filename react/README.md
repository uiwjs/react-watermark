<!--rehype:ignore:start--> 
react-watermark
===
<!--rehype:ignore:end-->

[![Build & Deploy](https://github.com/uiwjs/react-watermark/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-watermark/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-watermark/badges.svg)](https://uiwjs.github.io/react-watermark/coverage/lcov-report/)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-watermark.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-watermark)
[![NPM Version](https://img.shields.io/npm/v/@uiw/react-watermark.svg)](https://www.npmjs.com/package/@uiw/react-watermark)

A react component that adds a watermark to an area of a web page. Example Preview: https://uiwjs.github.io/react-watermark

## Install

Not dependent on **uiw**.

```bash
npm i @uiw/react-watermark
```

### Using

```jsx mdx:preview
import React from "react";
import Watermark from '@uiw/react-watermark';

const style = { width: '100%', maxWidth: '100%', height: 200, display: 'block' };

export default function App() {
  return (
    <Watermark
      content="UIW Watermark"
      style={{ background: '#fff' }}
    >
      <textarea style={style} defaultValue="Added watermark here" />
    </Watermark>
  );
}
```

More props settings

```jsx mdx:preview
import React from "react";
import Watermark from '@uiw/react-watermark';

const style = { width: '100%', maxWidth: '100%', height: 200, display: 'block' };

export default function App() {
  return (
    <Watermark
      content="UIW Watermark"
      rotate={20}
      gapX={5}
      width={100}
      gapY={80}
      height={5}
      fontSize={12}
      fontColor="rgb(255 0 0 / 25%)"
      style={{ background: '#fff' }}
    >
      <textarea style={style} defaultValue="Added watermark here" />
    </Watermark>
  );
}
```

## In the static pages

[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/watermark.js.svg?style=flat)](https://www.npmjs.com/package/@uiw/watermark.js)
[![NPM Version](https://img.shields.io/npm/v/@uiw/watermark.js.svg)](https://www.npmjs.com/package/@uiw/watermark.js)

```bash
npm i @uiw/watermark.js
```

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
import React from 'react';
import { WatermarkOptions } from '@uiw/watermark.js';
export interface WatermarkProps extends Omit<React.AllHTMLAttributes<HTMLDivElement>, 'width' | 'height'>, WatermarkOptions {
  prefixCls?: string;
  /** watermark style */
  markStyle?: React.CSSProperties;
  /** watermark class name */
  markClassName?: string;
  /** watermark text content */
  text?: string;
}
declare const Watermark: React.ForwardRefExoticComponent<WatermarkProps & React.RefAttributes<HTMLDivElement>>;
export default Watermark;
```

## Development

1. Install

Dependencies in the installation package and website

```bash
npm install
```

2. To develop, run the self-reloading build:

```bash
npm run build      # Compile packages      📦 @uiw/react-watermark & @uiw/watermark.js
npm run watch      # Real-time compilation 📦 @uiw/react-watermark
npm run watch:core # Real-time compilation 📦 @uiw/watermark.js
```

3. Run Document Website Environment:

```bash
npm run start
```

4. To contribute, please fork repos, add your patch and tests for it (in the `test/` folder) and submit a pull request.

```
npm run test
```


## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-watermark/graphs/contributors">
  <img src="https://uiwjs.github.io/react-watermark/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.