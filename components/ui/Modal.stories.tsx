import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import '@/app/globals.css';

const meta: Meta<typeof Modal> = {
    title: "UI/Modal",
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => {
      const [open, setOpen] = useState(false);
  
      return (
        <>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
  
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title="Patient Form"
          >
            <p>Mondal content here.</p>
          </Modal>
        </>
      );
    },
  };