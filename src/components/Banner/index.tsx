import Button from "../Button";
import Ribbon, { RibbonProps } from "../Ribbon";
import * as S from "./styles";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: string;
  ribbonSize?: RibbonProps["size"];
  ribbonColor?: RibbonProps["color"];
};

export default function Banner({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor,
  ribbonSize,
}: BannerProps) {
  return (
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={title} />
      {ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  );
}
