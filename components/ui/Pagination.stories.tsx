import type { Meta, StoryObj } from '@storybook/react-vite';
import Pagination from './Pagination';
import '@/app/globals.css';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => <Pagination currentPage={1} totalPages={10} onPageChange={(p) => console.log("Page:", p)} />,
};

export const LastPage: Story = {
  render: () => <Pagination currentPage={10} totalPages={10} onPageChange={(p) => console.log("Page:", p)} />,
};

export const MiddlePage: Story = {
  render: () => <Pagination currentPage={5} totalPages={10} onPageChange={(p) => console.log("Page:", p)} />,
};