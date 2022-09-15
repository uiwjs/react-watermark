import GitHubCorners from '@uiw/react-github-corners';
import styled from 'styled-components';
import Watermark from '@uiw/react-watermark';
import logo from './logo.svg';
import MarkdownPreview from './Markdown';

const Warpper = styled.div`
  padding: 0 1rem;
  padding-bottom: 12rem;
`;

const Header = styled.header`
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
  padding-top: 3rem;
  text-align: center;
`;

const Logo = styled.img`
  max-width: 12rem;
`;

const Info = styled.p`
  font-size: 1.5rem;
  max-width: 24rem;
`;

const Version = styled.sup`
  position: absolute;
  font-size: 1rem;
  padding-left: 0.4rem;
`;

export default function App() {
  const version = VERSION;
  return (
    <Watermark content="React Watermark (uiw)">
      <Warpper className="wmde-markdown-color">
        <GitHubCorners fixed target="__blank" zIndex={10} href="https://github.com/uiwjs/react-watermark" />
        <Header>
          <Logo src={logo} alt="react logo" />
          <h1>
            React Watermark <Version>{version}</Version>
          </h1>
          <Info>A react component that adds a watermark to an area of a web page.</Info>
        </Header>
        <MarkdownPreview />
      </Warpper>
    </Watermark>
  );
}
