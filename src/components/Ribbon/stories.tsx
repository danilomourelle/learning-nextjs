import { Meta, StoryObj } from "@storybook/react";
import Ribbon, { RibbonProps } from ".";

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

export const Default: StoryObj<RibbonProps> = {
  render: ({ children, ...others }: RibbonProps) => (
    <div
      style={{
        width: "20rem",
        height: "15rem",
        position: "relative",
        backgroundColor: "#888",
      }}
    >
      <Ribbon {...others}>{children}</Ribbon>
    </div>
  ),
};
