import type { Meta, StoryObj } from '@storybook/react';

import NumberField from '../../components/fields/NumberField';

const meta: Meta<typeof NumberField> = {
  component: NumberField,
};

export default meta;
type Story = StoryObj<typeof NumberField>;

export const StringFields: Story = {
  render: (args) => <NumberField {...args} />,
};
