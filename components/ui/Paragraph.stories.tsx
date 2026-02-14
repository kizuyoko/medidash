import type { Meta, StoryObj } from '@storybook/react-vite';
import Paragraph from './Paragraph';
import '@/app/globals.css';

const meta: Meta<typeof Paragraph> = {
    title: 'UI/Paragraph',
    component: Paragraph,
    args: {
        children: 'Default Paragraph, size: Medium',
        size: 'md',
    },
    argTypes: {
        size: {
            control: {type: 'radio'},
            options: ['sm', 'md', 'lg'],
        },
        children: {
            control: 'text',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Reusable paragraph component.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;


export const Default: Story = {}

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Paragraph in small'
    }
} 
export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Paragraph in large'
    }
} 
export const AllLevels: Story = {
  render: () => (
    <div className="space-y-2">
      <Paragraph size="lg">Large Paragraph</Paragraph>
      <Paragraph size="md">Medium Paragraph - default</Paragraph>
      <Paragraph size="sm">Small Paragraph</Paragraph>
    </div>
  ),
};  