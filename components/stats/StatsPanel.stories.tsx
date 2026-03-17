import type { Meta, StoryObj } from '@storybook/react-vite';
import StatsPanel from './StatsPanel';
import '@/app/globals.css';

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

const stats = {
  statusStats: { waiting: 4, in_consult: 2, done: 6, cancelled: 1 },
  genderStats: { male: 6, female: 6, unknown: 1 },
  bloodStats: { 'A+': 3, 'A-': 1, 'B+': 2, 'B-': 1, 'O+': 3, 'O-': 0, 'AB+': 1, 'AB-': 0, Unknown: 2 },
};

export const Default: Story = {
    render: () => <StatsPanel stats={stats} />,
};