import type { Meta, StoryObj } from '@storybook/react-vite';
import AlertsList from './AlertsList';
import '@/app/globals.css';

const meta: Meta<typeof AlertsList> = {
    title: 'Components/AlertList',
    component: AlertsList,
    parameters: {
        docs: {
            description: {
                component: 'AlertsList',
            },
        },
    }
};

export default meta;

type Story = StoryObj<typeof AlertsList>;

const alertsList = [
  { label: 'patients without appointment', count: 3 },
  { label: 'patients in critical condition', count: 1 },
  { label: 'patients older than 80', count: 5 },
];

export const Default: Story = {
    render: () => <AlertsList alerts={alertsList} />,
};