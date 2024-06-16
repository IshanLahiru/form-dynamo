import type { Meta, StoryObj } from '@storybook/react';
import StringField from '../../components/fields/StringField';

const meta = {
  title: 'Example/StringField',
  component: StringField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'string',
    name: 'string',
    title: 'String',
    formData: '',
    onChange: (value: string) => console.log(value),
    error: '',
  },
} satisfies Meta<typeof StringField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'String',
  },
};

export const WithError: Story = {
  args: {
    error: 'Invalid string',
  },
};

export const PreFilledString: Story = {
  args: {
    formData: 'Hello World',
  },
};
