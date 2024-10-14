import { Meta, StoryObj } from "@storybook/react";
import BannerSlider, { BannerSliderProps } from ".";

const items = [
  {
    img: "https://images.unsplash.com/photo-1521484358791-8c8504da415e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling",
  },
  {
    img: "https://images.unsplash.com/photo-1521484358791-8c8504da415e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Defy death 2",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
  {
    img: "https://images.unsplash.com/photo-1521484358791-8c8504da415e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Defy death 3",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
];

const meta: Meta<typeof BannerSlider> = {
  title: "BannerSlider",
  component: BannerSlider,
  args: {
    items,
  },
};

export default meta;

export const Default: StoryObj<BannerSliderProps> = {
  render: (args: BannerSliderProps) => (
    <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
      <BannerSlider {...args} />
    </div>
  ),
};
