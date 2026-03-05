import type { Meta, StoryObj } from '@storybook/react-vite';
import AlertsList from './AlertsList';
import '@/app/globals.css';
import { getFakeDisplayPatients } from '@/data/fake_display_patients';

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

const patients = getFakeDisplayPatients();

export const Default: Story = {
    render: () => <AlertsList patients={patients} />,
};