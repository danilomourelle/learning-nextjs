import { Meta, StoryObj } from "@storybook/react";
import Slider, { SliderProps } from ".";
import styled from "styled-components";

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

const meta: Meta<typeof Slider> = {
  title: "Slider",
  component: Slider,
};

export default meta;

export const Default: StoryObj<SliderProps> = {
  args: {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  render: (args: SliderProps) => (
    <Slider {...args}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
    </Slider>
  ),
};

export const Vertical: StoryObj<SliderProps> = {
  args: {
    settings: {
      vertical: true,
      verticalSwiping: true,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  render: (args: SliderProps) => (
    <Slider {...args}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
    </Slider>
  ),
};
