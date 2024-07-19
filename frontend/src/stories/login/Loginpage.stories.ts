import type { Meta, StoryObj } from '@storybook/react';
//import { fn } from '@storybook/test';
import LoginPage from '../../pages/LoginPage';

const meta = {
    title: 'Discord/loginPage',
    component: LoginPage,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      primary: true
    },
  };