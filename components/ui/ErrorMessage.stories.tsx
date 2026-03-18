import type { Meta, StoryObj } from '@storybook/react-vite';
import ErrorMessage from './ErrorMessage';
import '@/app/globals.css';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    docs: {
        description: {
            component: 'ErrorMessage with Status Badges',
        },
    },
  }
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md w-full">
      <ErrorMessage message="error" />
  </div>
  ),
};