import Link from "next/link";
import Heading from "../Heading";
import Logo from "../Logo";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content data-testid="footer-grid">
        <S.Column>
          <Heading
            color="black"
            $size="small"
            $lineBottom
            $lineColor="secondary"
          >
            CONTACT
          </Heading>
          <a href="#">sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading
            color="black"
            $size="small"
            $lineBottom
            $lineColor="secondary"
          >
            FOLLOW US
          </Heading>
          <nav aria-labelledby="social media">
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              YouTube
            </a>
            <a href="#" target="_blank" rel="noopenner, noreferrer">
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading
            color="black"
            $size="small"
            $lineBottom
            $lineColor="secondary"
          >
            LINKS
          </Heading>
          <nav aria-labelledby="social media">
            <Link href="/">Loja</Link>
            <Link href="/games">Explorar</Link>
            <Link href="/search">Buscar</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
        </S.Column>

        <S.Column>
          <Heading
            color="black"
            $size="small"
            $lineBottom
            $lineColor="secondary"
          >
            LOCATION
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum dolor.</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2024 All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
}
