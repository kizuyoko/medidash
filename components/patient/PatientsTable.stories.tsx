import type { Meta, StoryObj } from '@storybook/react-vite';
import PatientsTable from './PatientsTable';
import "../../index.css";
import { patients } from '../../data/fake_patients';

const meta: Meta<typeof PatientsTable> = {
    title: "Components/PatientsTable",
    component: PatientsTable,
    parameters: {
        docs: {
            description: {
                component: "Table to show overview of the patients",
            },
        },
    },

}

export default meta;

type Story = StoryObj<typeof PatientsTable>;

export const Default: Story = {
    args: { patients }
};