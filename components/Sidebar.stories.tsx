import type { Meta, StoryObj } from '@storybook/react-vite';
import SideBar from './Sidebar';
import { patients } from '@/data/fake_patients';
import '@/app/globals.css';

const meta: Meta<typeof SideBar> = {
    title: 'Components/SideBar',
    component: SideBar,
    parameters: {
        docs: {
            description: {
                component: 'SideBar with Status Badges',
            },
        },
    }
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
    args: { patients },
    render: () => (
    <div className="max-w-md w-full">
        <SideBar patients={patients} />
    </div>
  ),
};