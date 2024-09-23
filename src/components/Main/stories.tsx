import { Meta, StoryObj } from "@storybook/react";
import Main from ".";

const meta: Meta<typeof Main> = {
  title: "Main",
  component: Main,
};

export default meta;

export const Default: StoryObj = {};

export const Basic: StoryObj = {
  args: {
    title: "Basic Title",
    description: "Some basic description",
  },
};
