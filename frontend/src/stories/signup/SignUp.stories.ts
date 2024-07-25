import type { Meta, StoryObj } from '@storybook/react';
//import { fn } from '@storybook/test';
import SignUp from '../../components/SignUp';

const meta = {
    title: 'Discord/SignUp',
    component: SignUp,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof SignUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      primary: true
    },
  };