import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchBar from './SearchBar';
import '@/app/globals.css';

const meta: Meta<typeof SearchBar> = {
    title: 'Components/SearchBar',
    component: SearchBar,
    parameters: {
        docs: {
            description: {
                component: 'SearchBar with Status Badges',
            },
        },
    }
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    args: {
        onChange: (keyword: string) => {
            alert(`Search result will show up in the app: "${keyword}"`);
        },
    },
   render: (args) => (
        <div className="max-w-md">
            <SearchBar {...args} />
        </div>
    ),
};