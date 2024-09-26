import { Meta, StoryObj } from "@storybook/react";
import Heading from ".";

const meta: Meta<typeof Heading> = {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Default: StoryObj = {};
Default.args = {
  children: "Most Populars",
};
