import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '@uiw/react-watermark/README.md';
import Watermark from '@uiw/react-watermark';

const Github = MarkdownPreviewExample.Github;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Watermark
    content="React Watermark (uiw)"
    height={32}
    width={165}
    image="https://uiwjs.github.io/react-watermark/watermark-example.svg"
  >
    <MarkdownPreviewExample.NavMenu
      title="Watermark"
      menus={[
        <a target="_blank" href="https://jaywcjlove.github.io/#/sponsor" rel="noopener noreferrer">
          Sponsor
        </a>,
      ]}
    />
    <MarkdownPreviewExample
      source={data.source}
      components={data.components}
      data={data.data}
      title="React Watermark"
      description="A react component that adds a watermark to an area of a web page."
      version={`v${VERSION}`}
    >
      <Github href="https://github.com/uiwjs/react-watermark" />
    </MarkdownPreviewExample>
  </Watermark>,
);
