import type { Meta, StoryObj } from '@storybook/react';

import StringField from '../../components/fields/StringField';

const meta: Meta<typeof StringField> = {
  component: StringField,
};

export default meta;
type Story = StoryObj<typeof StringField>;

export const StringFields: Story = {
  render: (args) => <StringField {...args} />,
};