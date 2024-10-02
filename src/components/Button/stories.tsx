import { Meta, StoryObj } from "@storybook/react";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";
import Button, { ButtonProps } from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    icon: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    children: "Buy now",
    // icon: <AddShoppingCart />,
  },
};

export default meta;

export const Default: StoryObj = {};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    icon: <AddShoppingCart size={18} />,
  },
  render: (args: ButtonProps) => <Button {...args} />,
};

export const ButtonLink: StoryObj<ButtonProps> = {
  args: {
    as: "a",
    href: "/link",
  },
  render: (args: ButtonProps) => <Button {...args} />,
};
