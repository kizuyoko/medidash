import type { Meta, StoryObj } from "@storybook/react-vite";
import InputForm from "./InputForm";
import "@/app/globals.css";

const meta: Meta<typeof InputForm> = {
  title: "UI/InputForm",
  component: InputForm,
  args: {
    id: "firstName",
    name: "firstName",
    type: "text",
    value: "",
    onChange: () => {},
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "select", "textarea"],
      description: "Form variant",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Reusable Input component.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputForm>;

/**
 * Default text input
 */
export const Primary: Story = {};

/**
 * Select variant
 */
export const Select: Story = {
  args: {
    id: "status",
    name: "status",
    type: "select",
    value: "waiting",
  },
};

/**
 * Textarea variant
 */
export const Textarea: Story = {
  args: {
    id: "note",
    name: "note",
    type: "textarea",
    value: "",
  },
};