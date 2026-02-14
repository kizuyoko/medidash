import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './Footer';
import '@/app/globals.css';

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        docs: {
            description: {
                component: 'Footer with link icons',
            },
        },
    }
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};