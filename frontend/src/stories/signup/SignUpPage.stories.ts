import type { Meta, StoryObj } from '@storybook/react';
//import { fn } from '@storybook/test';
import SignUpPage from '../../pages/SignUpPage';

const meta = {
    title: 'Discord/SignUpPage',
    component: SignUpPage,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof SignUpPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      primary: true
    },
  };