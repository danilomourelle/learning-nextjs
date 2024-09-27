import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Buy now",
  },
};

export default meta;

export const Default: StoryObj = {};
