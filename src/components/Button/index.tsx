import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

export default function Button({ children, size = "medium" }: ButtonProps) {
  return <S.Wrapper size={size}>{children}</S.Wrapper>;
}
