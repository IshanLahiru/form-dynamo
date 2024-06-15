import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DateTimeField from '../components/fields/DateTimeField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: DateTimeField,
} satisfies Meta<typeof DateTimeField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
};