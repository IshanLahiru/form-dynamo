import type { Meta, StoryObj } from '@storybook/react';
import NumberField from '../../components/fields/NumberField';

const meta = {
  title: 'Example/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'number',
    name: 'number',
    title: 'Number',
    formData: '',
    onChange: (value: number | string) => console.log(value),
    error: '',
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Number',
  },
};

export const WithError: Story = {
  args: {
    error: 'Invalid number',
  },
};

export const PreFilledNumber: Story = {
  args: {
    formData: 42,
  },
};
