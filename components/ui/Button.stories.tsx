import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from "./Button";
import '@/app/globals.css';

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    variant: "primary",
    disabled: false,
    children: "Button",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Button variant",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
    children: {
      control: "text",
      description: "Button label",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Reusable Button component with Primary / Secondary / Disabled states. Colors are controlled via CSS variables.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// --------- Stories ---------
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled Button",
  },
};

export const Clickable: Story = {
  args: {
    variant: "primary",
    children: "Click me",
    onClick: () => {
      alert('Button clicked!');
    }, 
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  ),
};
