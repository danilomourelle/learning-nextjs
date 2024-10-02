import { Meta, StoryObj } from "@storybook/react";
import Banner from ".";

const meta: Meta<typeof Banner> = {
  title: "Banner",
  component: Banner,
  args: {
    img: "https://unsplash.com/pt-br/fotografias/menino-jogando-donkey-kong-arcade-box-PgToaHfQjq0",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
};

export default meta;

export const Default: StoryObj = {};
