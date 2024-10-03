import { Meta, StoryObj } from "@storybook/react";
import Ribbon from ".";

const meta: Meta<typeof Ribbon> = {
  title: "Ribbon",
  component: Ribbon,
  args: {
    children: "Best seller",
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Default: StoryObj = {};
