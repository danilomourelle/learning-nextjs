import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from "@styled-icons/material-outlined";
import * as S from "./styles";
import Button from "../Button";
import Ribbon, { RibbonProps } from "../Ribbon";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  ribbon?: string;
  ribbonSize?: RibbonProps["size"];
  ribbonColor?: RibbonProps["color"];
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
};

export default function GameCard({
  developer,
  img,
  price,
  title,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "small",
  promotionalPrice,
  favorite = false,
  onFav,
}: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      {ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && <S.Price $isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
}
