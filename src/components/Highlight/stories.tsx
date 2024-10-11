import { Meta, StoryObj } from "@storybook/react";
import Highlight, { HighlightProps } from ".";

const meta: Meta<typeof Highlight> = {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: "Buy now",
    buttonLink: "/#",
    $backgroundImage: "img/red-dead-img.jpg",
  },
};

export default meta;

export const Default: StoryObj = {};

export const WithFloat: StoryObj<HighlightProps> = {
  args: {
    floatImage: "/img/red-dead-float.png",
  },
  render: (args: HighlightProps) => <Highlight {...args} />,
};
