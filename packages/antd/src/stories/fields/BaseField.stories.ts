import type { Meta, StoryObj } from '@storybook/react';
import BaseField from '../../components/fields/BaseField';

const meta = {
  title: 'Example/BaseField',
  component: BaseField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'baseField',
    name: 'baseField',
    title: 'Basic Field',
    formData: '',
    onChange: (value: string) => console.log(value),
    error: '',
  },
} satisfies Meta<typeof BaseField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Field ',
  },
};

export const WithError: Story = {
  args: {
    error: 'Invalid validation',
  },
};

export const PreFilledDate: Story = {
  args: {
    formData: 'The default value',
  },
};
