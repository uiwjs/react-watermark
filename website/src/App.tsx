import GitHubCorners from '@uiw/react-github-corners';
import styled from 'styled-components';
import pkg from '@uiw/react-monorepo-template/package.json';
import MonorepoTemplate from '@uiw/react-monorepo-template';
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

export default function App() {
  const version = VERSION;
  return (
    <Warpper className="wmde-markdown-color">
      <GitHubCorners fixed target="__blank" zIndex={10} href="https://github.com/uiwjs/react-monorepo-template" />
      <Header>
        <Logo src={logo} alt="react logo" />
        <h1>
          {pkg.name} {version}
        </h1>
        <Info>Simple React package development project example template.</Info>
        <MonorepoTemplate>import MonorepoTemplate from '@uiw/react-monorepo-template';</MonorepoTemplate>
      </Header>
      <MarkdownPreview />
    </Warpper>
  );
}
