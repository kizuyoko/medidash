import type { Meta, StoryObj } from '@storybook/react-vite';
import FooterIcon from './FooterIcon';
import '@/app/globals.css';

const meta: Meta<typeof FooterIcon> = {
    title: 'UI/FooterIcon',
    component: FooterIcon,
    parameters: {
      docs: {
        description: {
          component: 'Reusable footer icon UI component.',
        },
      },
    },
  }

  export default meta;
  type Story = StoryObj<typeof FooterIcon>;
  
  export const GitHub: Story = {
    args: {
      src: "/github.svg",
      link: 'https://github.com/kizuyoko/patientdash',
      alt: 'GitHub',
    },
  };
  
  export const LinkedIn: Story = {
    args: {
      src: "/linkedin.svg",
      link: 'https://www.linkedin.com/in/kizuyoko/',
      alt: 'LinkedIn',
    },
  };

  export const Both: Story = {
    render: () => (
      <footer>
        <ul style={{ display: 'flex', gap: '12px' }}>
          <li>
            <FooterIcon
              src="/github.svg"
              link="https://github.com/kizuyoko/patientdash"
              alt="GitHub"
            />
          </li>
          <li>
            <FooterIcon
              src="/linkedin.svg"
              link="https://www.linkedin.com/in/kizuyoko/"
              alt="LinkedIn"
            />
          </li>
        </ul>
      </footer>
    ),
  };