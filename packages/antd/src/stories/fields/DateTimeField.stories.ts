import type { Meta, StoryObj } from '@storybook/react';
import DateTimeField from '../../components/fields/DateTimeField';
import moment from 'moment';

const meta = {
  title: 'Example/DateTimeField',
  component: DateTimeField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'datetimeField',
    name: 'datetimeField',
    title: 'Select Date and Time',
    formData: '',
    onChange: (value: string) => console.log(value),
    error: '',
  },
} satisfies Meta<typeof DateTimeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Date and Time Field',
  },
};

export const WithError: Story = {
  args: {
    error: 'Invalid date or time',
  },
};

export const PreFilledDate: Story = {
  args: {
    formData: moment().format('YYYY-MM-DDTHH:mm'),
  },
};
