import { Meta, StoryObj } from "@storybook/react";
import MediaMatch, { MediaMatchProps } from ".";

const meta: Meta<typeof MediaMatch> = {
  title: "MediaMatch",
  component: MediaMatch,
};

export default meta;

export const Mobile: StoryObj<MediaMatchProps> = {
  args: {
    $lessThan: "medium",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: (args) => <MediaMatch {...args}>Less than medium</MediaMatch>,
};

export const Desktop: StoryObj<MediaMatchProps> = {
  args: {
    $greaterThan: "medium",
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  render: (args) => <MediaMatch {...args}>Greater than large</MediaMatch>,
};
