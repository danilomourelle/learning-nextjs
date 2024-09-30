import { Meta, StoryObj } from "@storybook/react";
import Menu from ".";

const meta: Meta<typeof Menu> = {
  title: "Menu",
  component: Menu,
};

export default meta;

export const Default: StoryObj = {};

Default.parameters = {
  layout: "fullscreen",
  background: {
    default: "dark",
  },
};
