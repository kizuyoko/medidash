import type { Meta, StoryObj } from '@storybook/react-vite';
import TableSkeleton from './TableSkeleton';
import '@/app/globals.css';

const meta: Meta<typeof TableSkeleton> = {
  title: 'Components/TableSkelton',
  component: TableSkeleton,
  parameters: {
    docs: {
        description: {
            component: 'TableSkeleton with Status Badges',
        },
    },
  }
};

export default meta;

type Story = StoryObj<typeof TableSkeleton>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md w-full">
      <TableSkeleton />
  </div>
  ),
};