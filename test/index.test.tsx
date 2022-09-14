/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import 'jest-canvas-mock';
import '@testing-library/jest-dom';
import React from 'react';
import Watermark from '../react/src';

test('renders learn react link', () => {
  render(<Watermark>learn react</Watermark>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
