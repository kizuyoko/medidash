import type { Meta, StoryObj } from '@storybook/react-vite';
import Heading from './Heading';
import '../../app/globals.css';

const meta: Meta<typeof Heading> = {
  title: 'UI/Heading',
  component: Heading,
  args: {
    level: 2,
    children: 'Patient List',
  },
  argTypes: {
    level: {
      control: { type: 'radio' },
      options: [1, 2, 3, 4],
      description: 'Heading level (HTML h1-h4)',
    },
    children: {
      control: 'text',
      description: 'Heading text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Reusable heading component with semantic HTML levels.',
      },
    },
  },
}

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default_H2: Story = {}

export const H1: Story = {
  args: {
    level: 1,
    children: 'MediTech',
  },
}

export const H3: Story = {
  args: {
    level: 3,
    children: 'Section title',
  },
}

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
    </div>
  ),
}