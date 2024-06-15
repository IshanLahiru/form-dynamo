import type { Meta, StoryObj } from '@storybook/react';
import DateTimeField from '../../components/fields/DateTimeField';

const meta = {
  title: 'Example/DateTimeField',
  component: DateTimeField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'datetime',
    name: 'datetime',
    title: 'Date and Time',
    formData: '',
    onChange: (value: string) => console.log(value),
    error: '',
  },
} satisfies Meta<typeof DateTimeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Date ',
  },
};

export const WithError: Story = {
  args: {
    error: 'Invalid date',
  },
};

export const PreFilledDate: Story = {
  args: {
    formData: '2023-06-15T12:00',
  },
};
