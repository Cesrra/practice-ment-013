import type { Meta, StoryObj } from '@storybook/react';
//import { fn } from '@storybook/test';
import LoginForm from '../../components/login/LoginForm';

const meta = {
    title: 'Discord/loginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      primary: true
    },
  };