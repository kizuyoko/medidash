import type { Meta, StoryObj } from '@storybook/react-vite';
import StatsPanel from './StatsPanel';
import '@/app/globals.css';
import { getFakeDisplayPatients } from '@/data/fake_display_patients';

const meta: Meta<typeof StatsPanel> = {
    title: 'Components/StatsPanel',
    component: StatsPanel,
    parameters: {
        docs: {
            description: {
                component: 'StatsPanel',
            },
        },
    }
};

export default meta;

type Story = StoryObj<typeof StatsPanel>;

const patients = getFakeDisplayPatients();

export const Default: Story = {
    render: () => <StatsPanel patients={patients} />,
};