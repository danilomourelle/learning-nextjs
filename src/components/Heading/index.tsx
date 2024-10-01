import * as S from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  $lineLeft?: boolean;
  $lineBottom?: boolean;
  $size?: "small" | "medium";
  $lineColor?: "primary" | "secondary";
};

export default function Heading(props: HeadingProps) {
  const { children, ...others } = props;
  const defaultProps: Required<Omit<HeadingProps, "children">> = {
    color: "white",
    $lineLeft: false,
    $lineBottom: false,
    $size: "medium",
    $lineColor: "primary",
    ...others,
  };

  return <S.Wrapper {...defaultProps}>{children}</S.Wrapper>;
}
