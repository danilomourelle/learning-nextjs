import { Meta, StoryObj } from "@storybook/react";
import Banner, { BannerProps } from ".";

const meta: Meta<typeof Banner> = {
  title: "Banner",
  component: Banner,
  args: {
    img: "https://images.unsplash.com/photo-1521484358791-8c8504da415e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
  argTypes: {
    ribbon: {
      type: "string",
    },
    ribbonColor: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    ribbonSize: {
      control: "radio",
      options: ["small", "normal"],
    },
  },
};

export default meta;

export const Default: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
      <Banner {...args} />
    </div>
  ),
};

export const WithRibbon: StoryObj<BannerProps> = {
  render: (args) => (
    <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
      <Banner {...args} />
    </div>
  ),
};
WithRibbon.args = {
  ribbon: "Best seller",
  ribbonColor: "primary",
  ribbonSize: "normal",
};
