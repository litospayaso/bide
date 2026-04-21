import './index';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

const render = (_args: any) => {
  const element = document.createElement('bide-app');
  return element;
}

const meta = {
  title: 'Pages/pageBideApp',
  tags: ['autodocs'],
  render,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const pageBideApp: Story = {
  render
};
