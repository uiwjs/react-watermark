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
# Or
npm i @uiw/watermark.js
```

### Using

```jsx mdx:preview
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

Multi-line watermark text

```jsx mdx:preview
import React from "react";
import Watermark from '@uiw/react-watermark';

const style = { width: '100%', maxWidth: '100%', height: 200, display: 'block' };
const text = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.`;

export default function App() {
  return (
    <Watermark
      content={['UIW Watermark', '多行文字']}
      style={{ background: '#fff' }}
    >
      <textarea style={style} spellCheck={false} defaultValue="Added watermark here" />
    </Watermark>
  );
}
```

More props settings

```jsx mdx:preview
import React from "react";
import Watermark from '@uiw/react-watermark';

const style = { width: '100%', maxWidth: '100%', height: 200, display: 'block' };
const text = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.`;

export default function App() {
  return (
    <Watermark
      content="UIW Watermark"
      rotate={20}
      gapY={0}
      gapX={5}
      width={100}
      gapY={80}
      height={5}
      fontSize={12}
      fontColor="rgb(255 0 0 / 25%)"
      style={{ background: '#fff' }}
    >
      <textarea style={style} spellCheck={false} defaultValue={text} />
    </Watermark>
  );
}
```

Image watermark

```jsx mdx:preview
import React from "react";
import Watermark from '@uiw/react-watermark';

const style = { width: '100%', maxWidth: '100%', height: 200, display: 'block' };
const text = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`;

export default function App() {
  return (
    <Watermark
      height={32}
      width={165}
      image="https://uiwjs.github.io/react-watermark/watermark-example.svg"
    >
      <textarea style={style} spellCheck={false} defaultValue={text} />
    </Watermark>
  );
}
```

Image base64 watermark

```jsx mdx:preview
import React from "react";
import Watermark from '@uiw/react-watermark';

const imageBase64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjUiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNjUgMzEiPjxnIGZpbGw9IiNBQUEiIG9wYWNpdHk9Ii40MjEiPjxwYXRoIGQ9Ik02Ljg0NDg5MzY2LDAgTDEzLjY4OTc4NzMsNS4yOTg0MzczNCBMMTEuMDc1MjcwNiwxMy44NzE0ODkgTDIuNjE0NTE2NzMsMTMuODcxNDg5IEwwLDUuMjk4NDM3MzQgTDYuODQ0ODkzNjYsMCBaIE02Ljg0NDg5MzY2LDMxIEwwLDI1LjcwMTU2MjYgTDIuNjE0NTE2NzMsMTcuMTI4NTEwOSBMMTEuMDc1MjcwNiwxNy4xMjg1MTA5IEwxMy42ODk3ODczLDI1LjcwMTU2MjYgTDYuODQ0ODkzNjYsMzEgWiBNMjYsMjAuMTAwMjMwOSBMMTcuOTUzMjE4MSwyMi44ODU1OTgzIEwxMi45Nzk5MDY0LDE1LjU5Mjk5NiBMMTcuOTUzMDEyNyw4LjMwMDU1MjU0IEwyNiwxMS4wODYxNzcgTDI2LDIwLjEwMDIzMDkgWiIvPjxwb2x5Z29uIHBvaW50cz0iMzQgNiAzOS4wMjcgMjMgNDEuODk2IDIzIDQ1LjQ1MSA5Ljg4MSA0NS41NDkgOS44ODEgNDkuMTA0IDIzIDUxLjk0OSAyMyA1NyA2IDUzLjk4NCA2IDUwLjU3NiAxOS4yMzggNTAuNDc4IDE5LjIzOCA0Ni44OTggNiA0NC4xMDIgNiA0MC41MjIgMTkuMjM4IDQwLjQyNCAxOS4yMzggMzcuMDE2IDYiLz48cGF0aCBkPSJNNjQuNDg3MTc5NSAxMUM2Mi44NDYxNTM4IDExIDYxLjUxMjgyMDUgMTEuMjgyNTY4OCA2MC41Mzg0NjE1IDExLjg5OTA4MjYgNTkuNDEwMjU2NCAxMi41NjY5NzI1IDU4LjY5MjMwNzcgMTMuNjQ1ODcxNiA1OC40MTAyNTY0IDE1LjA4NDQwMzdMNjEuMTAyNTY0MSAxNS4zMTU1OTYzQzYxLjI1NjQxMDMgMTQuNTcwNjQyMiA2MS42NDEwMjU2IDE0LjAzMTE5MjcgNjIuMjU2NDEwMyAxMy42NzE1NTk2IDYyLjc2OTIzMDggMTMuMzYzMzAyOCA2My40NjE1Mzg1IDEzLjIwOTE3NDMgNjQuMzA3NjkyMyAxMy4yMDkxNzQzIDY2LjMwNzY5MjMgMTMuMjA5MTc0MyA2Ny4zMDc2OTIzIDE0LjEzMzk0NSA2Ny4zMDc2OTIzIDE1Ljk4MzQ4NjJMNjcuMzA3NjkyMyAxNi41MjI5MzU4IDY0LjMzMzMzMzMgMTYuNkM2Mi4zODQ2MTU0IDE2LjY1MTM3NjEgNjAuODQ2MTUzOCAxNy4wMzY2OTcyIDU5Ljc2OTIzMDggMTcuODA3MzM5NCA1OC41ODk3NDM2IDE4LjYwMzY2OTcgNTggMTkuNzU5NjMzIDU4IDIxLjI0OTU0MTMgNTggMjIuMzU0MTI4NCA1OC40MTAyNTY0IDIzLjI1MzIxMSA1OS4yNTY0MTAzIDIzLjk0Njc4OSA2MC4wMjU2NDEgMjQuNjQwMzY3IDYxLjEwMjU2NDEgMjUgNjIuNDg3MTc5NSAyNSA2My42NjY2NjY3IDI1IDY0LjY5MjMwNzcgMjQuNzY4ODA3MyA2NS41NjQxMDI2IDI0LjM1Nzc5ODIgNjYuMzMzMzMzMyAyMy45NzI0NzcxIDY2Ljk3NDM1OSAyMy40MzMwMjc1IDY3LjQ4NzE3OTUgMjIuNzY1MTM3Nkw2Ny40ODcxNzk1IDI0LjY0MDM2NyA3MCAyNC42NDAzNjcgNzAgMTYuMTYzMzAyOEM3MCAxNC41NDQ5NTQxIDY5LjU4OTc0MzYgMTMuMzExOTI2NiA2OC43OTQ4NzE4IDEyLjQ2NDIyMDIgNjcuODcxNzk0OSAxMS40ODgwNzM0IDY2LjQzNTg5NzQgMTEgNjQuNDg3MTc5NSAxMVpNNjcuMzA3NjkyMyAxOC41MDA5MTc0IDY3LjMwNzY5MjMgMTkuMjcxNTU5NkM2Ny4zMDc2OTIzIDIwLjI5OTA4MjYgNjYuODcxNzk0OSAyMS4xNzI0NzcxIDY2LjA1MTI4MjEgMjEuODY2MDU1IDY1LjIzMDc2OTIgMjIuNTU5NjMzIDY0LjI1NjQxMDMgMjIuOTE5MjY2MSA2My4xMDI1NjQxIDIyLjkxOTI2NjEgNjIuNDEwMjU2NCAyMi45MTkyNjYxIDYxLjg0NjE1MzggMjIuNzM5NDQ5NSA2MS40MzU4OTc0IDIyLjQwNTUwNDYgNjEgMjIuMDcxNTU5NiA2MC43OTQ4NzE4IDIxLjY2MDU1MDUgNjAuNzk0ODcxOCAyMS4xNDY3ODkgNjAuNzk0ODcxOCAxOS41MDI3NTIzIDYyLjAyNTY0MSAxOC42MjkzNTc4IDY0LjUxMjgyMDUgMTguNTc3OTgxN0w2Ny4zMDc2OTIzIDE4LjUwMDkxNzRaTTc4LjA1IDggNzUuNCA5LjA5MzU2NzI1IDc1LjQgMTIuMTUwNTg0OCA3MyAxMi4xNTA1ODQ4IDczIDE0LjMzNzcxOTMgNzUuNCAxNC4zMzc3MTkzIDc1LjQgMjEuNzkzODU5NkM3NS40IDIyLjgxMjg2NTUgNzUuNjI1IDIzLjU4MzMzMzMgNzYuMTI1IDI0LjEzMDExNyA3Ni42MjUgMjQuNzAxNzU0NCA3Ny40NSAyNSA3OC41NSAyNUw4MC42NzUgMjUgODAuNjc1IDIyLjgxMjg2NTUgNzguOTc1IDIyLjgxMjg2NTVDNzguNjUgMjIuODEyODY1NSA3OC40MjUgMjIuNzEzNDUwMyA3OC4yNzUgMjIuNTY0MzI3NSA3OC4xMjUgMjIuMzkwMzUwOSA3OC4wNSAyMi4xNDE4MTI5IDc4LjA1IDIxLjc5Mzg1OTZMNzguMDUgMTQuMzM3NzE5MyA4MSAxNC4zMzc3MTkzIDgxIDEyLjE1MDU4NDggNzguMDUgMTIuMTUwNTg0OCA3OC4wNSA4Wk04OC45MTY2NjY3IDExQzg2LjgwNTU1NTYgMTEgODUuMTExMTExMSAxMS42Njc4ODk5IDgzLjg4ODg4ODkgMTMuMDI5MzU3OCA4Mi42MTExMTExIDE0LjM2NTEzNzYgODIgMTYuMDA5MTc0MyA4MiAxNy45ODcxNTYgODIgMjAuMTcwNjQyMiA4Mi42NjY2NjY3IDIxLjg5MTc0MzEgODQgMjMuMTc2MTQ2OCA4NS4yMjIyMjIyIDI0LjM4MzQ4NjIgODYuOTE2NjY2NyAyNSA4OS4wMjc3Nzc4IDI1IDkwLjk0NDQ0NDQgMjUgOTIuNTI3Nzc3OCAyNC40ODYyMzg1IDkzLjc3Nzc3NzggMjMuNDg0NDAzNyA5NC43Nzc3Nzc4IDIyLjY2MjM4NTMgOTUuNDE2NjY2NyAyMS42MDkxNzQzIDk1Ljc1IDIwLjM3NjE0NjhMOTIuODA1NTU1NiAyMC4zNzYxNDY4QzkyLjQxNjY2NjcgMjEuMTQ2Nzg5IDkyIDIxLjczNzYxNDcgOTEuNSAyMi4wOTcyNDc3IDkwLjg2MTExMTEgMjIuNTMzOTQ1IDkwLjAyNzc3NzggMjIuNzY1MTM3NiA4OSAyMi43NjUxMzc2IDg3LjgzMzMzMzMgMjIuNzY1MTM3NiA4Ni45MTY2NjY3IDIyLjQwNTUwNDYgODYuMjUgMjEuNzM3NjE0NyA4NS41ODMzMzMzIDIxLjA0NDAzNjcgODUuMjIyMjIyMiAyMC4wNDIyMDE4IDg1LjExMTExMTEgMTguNzU3Nzk4Mkw5NiAxOC43NTc3OTgyQzk1Ljk3MjIyMjIgMTYuMzk0NDk1NCA5NS4zODg4ODg5IDE0LjU0NDk1NDEgOTQuMjc3Nzc3OCAxMy4yMDkxNzQzIDkzLjA1NTU1NTYgMTEuNzE5MjY2MSA5MS4yNSAxMSA4OC45MTY2NjY3IDExWk04OSAxMy4yMzQ4NjI0QzkxLjMzMzMzMzMgMTMuMjM0ODYyNCA5Mi42Mzg4ODg5IDE0LjM5MDgyNTcgOTIuOTE2NjY2NyAxNi43MDI3NTIzTDg1LjE2NjY2NjcgMTYuNzAyNzUyM0M4NS4zMzMzMzMzIDE1LjU3MjQ3NzEgODUuNzUgMTQuNzI0NzcwNiA4Ni4zNjExMTExIDE0LjEzMzk0NSA4Ny4wMjc3Nzc4IDEzLjUxNzQzMTIgODcuODg4ODg4OSAxMy4yMzQ4NjI0IDg5IDEzLjIzNDg2MjRaTTEwMi4yNTQwNzIgOUMxMDEuNDIwMTk1IDkgMTAwLjY5MDU1NCA5LjIzNzI4ODE0IDEwMC4wNjUxNDcgOS43NjQ1OTUxIDk5LjU0Mzk3MzkgMTAuMTMzNzEgOTkuMTAwOTc3MiAxMC42ODczODIzIDk4Ljc2MjIxNSAxMS40MjU2MTIxTDk4Ljc2MjIxNSA5LjM2OTExNDg4IDk2IDkuMzY5MTE0ODggOTYgMjMgOTguNzYyMjE1IDIzIDk4Ljc2MjIxNSAxNS43NzU4OTQ1Qzk4Ljc2MjIxNSAxNC41ODk0NTM5IDk5LjEwMDk3NzIgMTMuNjEzOTM2IDk5LjgwNDU2MDMgMTIuODc1NzA2MiAxMDAuNDU2MDI2IDEyLjE5MDIwNzIgMTAxLjIxMTcyNiAxMS44NDc0NTc2IDEwMi4wNDU2MDMgMTEuODQ3NDU3NiAxMDIuNjcxMDEgMTEuODQ3NDU3NiAxMDMuMzIyNDc2IDExLjkyNjU1MzcgMTA0IDEyLjEzNzQ3NjVMMTA0IDkuMzQyNzQ5NTNDMTAzLjUzMDk0NSA5LjEwNTQ2MTM5IDEwMi45MzE1OTYgOSAxMDIuMjU0MDcyIDlaTTExMS4yMjQ1NzEgOUMxMDkuOTE5NDE5IDkgMTA4LjcxNDY2MyA5LjYwNjQwMzAxIDEwNy42NjA1MDIgMTAuODcxOTM5N0wxMDcuNjYwNTAyIDkuMzY5MTE0ODggMTA1IDkuMzY5MTE0ODggMTA1IDIzIDEwNy42NjA1MDIgMjMgMTA3LjY2MDUwMiAxNC44MDAzNzY2QzEwNy42NjA1MDIgMTMuODUxMjI0MSAxMDcuOTExNDkzIDEzLjAzMzg5ODMgMTA4LjQ2MzY3MiAxMi4zNzQ3NjQ2IDEwOC45NjU2NTQgMTEuNjg5MjY1NSAxMDkuNjY4NDI4IDExLjM0NjUxNiAxMTAuNTIxNzk3IDExLjM0NjUxNiAxMTIuMjc4NzMyIDExLjM0NjUxNiAxMTMuMTgyMjk5IDEyLjQwMTEyOTkgMTEzLjE4MjI5OSAxNC41NjMwODg1TDExMy4xODIyOTkgMjMgMTE1Ljg0MjgwMSAyMyAxMTUuODQyODAxIDE0LjYxNTgxOTJDMTE1Ljg0MjgwMSAxMy42MTM5MzYgMTE2LjA5Mzc5MSAxMi43OTY2MTAyIDExNi41OTU3NzMgMTIuMjE2NTcyNSAxMTcuMDk3NzU0IDExLjYzNjUzNDggMTE3LjcwMDEzMiAxMS4zNDY1MTYgMTE4LjQ1MzEwNCAxMS4zNDY1MTYgMTE5LjQ1NzA2NyAxMS4zNDY1MTYgMTIwLjIxMDA0IDExLjU4MzgwNDEgMTIwLjY2MTgyMyAxMi4xMTExMTExIDEyMS4xMTM2MDYgMTIuNjEyMDUyNyAxMjEuMzM5NDk4IDEzLjQyOTM3ODUgMTIxLjMzOTQ5OCAxNC41MzY3MjMyTDEyMS4zMzk0OTggMjMgMTI0IDIzIDEyNCAxNC4wNjIxNDY5QzEyNCAxMi41MzI5NTY3IDEyMy41NDgyMTcgMTEuMzIwMTUwNyAxMjIuNjk0ODQ4IDEwLjM5NzM2MzUgMTIxLjgxNjM4IDkuNDQ4MjEwOTIgMTIwLjcxMjAyMSA5IDExOS4zODE3NyA5IDExOC41MDMzMDMgOSAxMTcuNzc1NDI5IDkuMTU4MTkyMDkgMTE3LjE3MzA1MiA5LjUwMDk0MTYyIDExNi41MjA0NzYgOS44NDM2OTExNSAxMTUuODkyOTk5IDEwLjQ1MDA5NDIgMTE1LjMxNTcyIDExLjI5Mzc4NTMgMTE0LjUxMjU1IDkuNzY0NTk1MSAxMTMuMTMyMSA5IDExMS4yMjQ1NzEgOVpNMTMzLjQ4NzE3OSAxMUMxMzEuODQ2MTU0IDExIDEzMC41MTI4MjEgMTEuMjgyNTY4OCAxMjkuNTM4NDYyIDExLjg5OTA4MjYgMTI4LjQxMDI1NiAxMi41NjY5NzI1IDEyNy42OTIzMDggMTMuNjQ1ODcxNiAxMjcuNDEwMjU2IDE1LjA4NDQwMzdMMTMwLjEwMjU2NCAxNS4zMTU1OTYzQzEzMC4yNTY0MSAxNC41NzA2NDIyIDEzMC42NDEwMjYgMTQuMDMxMTkyNyAxMzEuMjU2NDEgMTMuNjcxNTU5NiAxMzEuNzY5MjMxIDEzLjM2MzMwMjggMTMyLjQ2MTUzOCAxMy4yMDkxNzQzIDEzMy4zMDc2OTIgMTMuMjA5MTc0MyAxMzUuMzA3NjkyIDEzLjIwOTE3NDMgMTM2LjMwNzY5MiAxNC4xMzM5NDUgMTM2LjMwNzY5MiAxNS45ODM0ODYyTDEzNi4zMDc2OTIgMTYuNTIyOTM1OCAxMzMuMzMzMzMzIDE2LjZDMTMxLjM4NDYxNSAxNi42NTEzNzYxIDEyOS44NDYxNTQgMTcuMDM2Njk3MiAxMjguNzY5MjMxIDE3LjgwNzMzOTQgMTI3LjU4OTc0NCAxOC42MDM2Njk3IDEyNyAxOS43NTk2MzMgMTI3IDIxLjI0OTU0MTMgMTI3IDIyLjM1NDEyODQgMTI3LjQxMDI1NiAyMy4yNTMyMTEgMTI4LjI1NjQxIDIzLjk0Njc4OSAxMjkuMDI1NjQxIDI0LjY0MDM2NyAxMzAuMTAyNTY0IDI1IDEzMS40ODcxNzkgMjUgMTMyLjY2NjY2NyAyNSAxMzMuNjkyMzA4IDI0Ljc2ODgwNzMgMTM0LjU2NDEwMyAyNC4zNTc3OTgyIDEzNS4zMzMzMzMgMjMuOTcyNDc3MSAxMzUuOTc0MzU5IDIzLjQzMzAyNzUgMTM2LjQ4NzE3OSAyMi43NjUxMzc2TDEzNi40ODcxNzkgMjQuNjQwMzY3IDEzOSAyNC42NDAzNjcgMTM5IDE2LjE2MzMwMjhDMTM5IDE0LjU0NDk1NDEgMTM4LjU4OTc0NCAxMy4zMTE5MjY2IDEzNy43OTQ4NzIgMTIuNDY0MjIwMiAxMzYuODcxNzk1IDExLjQ4ODA3MzQgMTM1LjQzNTg5NyAxMSAxMzMuNDg3MTc5IDExWk0xMzYuMzA3NjkyIDE4LjUwMDkxNzQgMTM2LjMwNzY5MiAxOS4yNzE1NTk2QzEzNi4zMDc2OTIgMjAuMjk5MDgyNiAxMzUuODcxNzk1IDIxLjE3MjQ3NzEgMTM1LjA1MTI4MiAyMS44NjYwNTUgMTM0LjIzMDc2OSAyMi41NTk2MzMgMTMzLjI1NjQxIDIyLjkxOTI2NjEgMTMyLjEwMjU2NCAyMi45MTkyNjYxIDEzMS40MTAyNTYgMjIuOTE5MjY2MSAxMzAuODQ2MTU0IDIyLjczOTQ0OTUgMTMwLjQzNTg5NyAyMi40MDU1MDQ2IDEzMCAyMi4wNzE1NTk2IDEyOS43OTQ4NzIgMjEuNjYwNTUwNSAxMjkuNzk0ODcyIDIxLjE0Njc4OSAxMjkuNzk0ODcyIDE5LjUwMjc1MjMgMTMxLjAyNTY0MSAxOC42MjkzNTc4IDEzMy41MTI4MjEgMTguNTc3OTgxN0wxMzYuMzA3NjkyIDE4LjUwMDkxNzRaTTE0OC4yNTQwNzIgOUMxNDcuNDIwMTk1IDkgMTQ2LjY5MDU1NCA5LjIzNzI4ODE0IDE0Ni4wNjUxNDcgOS43NjQ1OTUxIDE0NS41NDM5NzQgMTAuMTMzNzEgMTQ1LjEwMDk3NyAxMC42ODczODIzIDE0NC43NjIyMTUgMTEuNDI1NjEyMUwxNDQuNzYyMjE1IDkuMzY5MTE0ODggMTQyIDkuMzY5MTE0ODggMTQyIDIzIDE0NC43NjIyMTUgMjMgMTQ0Ljc2MjIxNSAxNS43NzU4OTQ1QzE0NC43NjIyMTUgMTQuNTg5NDUzOSAxNDUuMTAwOTc3IDEzLjYxMzkzNiAxNDUuODA0NTYgMTIuODc1NzA2MiAxNDYuNDU2MDI2IDEyLjE5MDIwNzIgMTQ3LjIxMTcyNiAxMS44NDc0NTc2IDE0OC4wNDU2MDMgMTEuODQ3NDU3NiAxNDguNjcxMDEgMTEuODQ3NDU3NiAxNDkuMzIyNDc2IDExLjkyNjU1MzcgMTUwIDEyLjEzNzQ3NjVMMTUwIDkuMzQyNzQ5NTNDMTQ5LjUzMDk0NSA5LjEwNTQ2MTM5IDE0OC45MzE1OTYgOSAxNDguMjU0MDcyIDlaIi8+PHBvbHlnb24gcG9pbnRzPSIxNTAgNiAxNTAgMjUgMTUzLjA0NyAyNSAxNTMuMDQ3IDIwLjI3NiAxNTQuNzQzIDE4Ljg0MSAxNjAuMDkgMjUgMTY0IDI1IDE1Ni44NDIgMTcuMDY2IDE2My40MjUgMTEuNTA3IDE1OS40ODcgMTEuNTA3IDE1My4wNDcgMTcuMDY2IDE1My4wNDcgNiIvPjwvZz48L3N2Zz4='

const style = { width: '100%', maxWidth: '100%', height: 200, display: 'block' };
const text = `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`;

export default function App() {
  return (
    <Watermark
      height={32}
      width={165}
      image={imageBase64}
    >
      <textarea style={style} spellCheck={false} defaultValue={text} />
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

**`@uiw/watermark.js`**

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