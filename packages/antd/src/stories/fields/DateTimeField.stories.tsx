import type { Meta, StoryObj } from '@storybook/react';

import DateTimeField from '../../components/fields/DateTimeField';

const meta: Meta<typeof DateTimeField> = {
  component: DateTimeField,
};

export default meta;
type Story = StoryObj<typeof DateTimeField>;

export const StringFields: Story = {
  render: (args) => <DateTimeField {...args} />,
};
