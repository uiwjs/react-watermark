/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import React from 'react';
import Watermark from '../react/src';

test('renders learn react link', async () => {
  render(<Watermark content="uiw">learn react</Watermark>);
  const linkElement = await screen.getByText(/learn react/i);
  expect(linkElement.getAttribute('class')).toEqual('w-watermark-wrapper')
  expect(linkElement.getAttribute('style')).toEqual('position: relative;')
  expect(linkElement).toBeInTheDocument();
  const component = renderer.create(<Watermark content="uiw">learn react</Watermark>);

  let tree = component.toJSON() as ReactTestRendererJSON;
  const child = tree.children![1] as ReactTestRendererJSON;
  expect(child.props.className).toEqual('w-watermark');
});
