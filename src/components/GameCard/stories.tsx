import { Meta, StoryObj } from "@storybook/react";
import GameCard, { GameCardProps } from ".";

const meta: Meta<typeof GameCard> = {
  title: "GameCard",
  component: GameCard,
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://images.unsplash.com/photo-1521484358791-8c8504da415e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "R$ 235,00",
  },
};

export default meta;

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: "30rem" }}>
      <GameCard {...args} />
    </div>
  ),
};

export const Promotional: StoryObj<GameCardProps> = {
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "https://images.unsplash.com/photo-1521484358791-8c8504da415e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "R$ 235,00",
    promotionalPrice: "R$ 210,00",
  },

  render: (args) => (
    <div
      style={{
        width: "30rem",
      }}
    >
      <GameCard {...args} />
    </div>
  ),
};
