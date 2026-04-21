import './index';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

const render = (_args: any) => {
  const element = document.createElement('page-camera');
  return element;
}

const meta = {
  title: 'Pages/pageCamera',
  tags: ['autodocs'],
  render,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const pageCamera: Story = {
  render
};
