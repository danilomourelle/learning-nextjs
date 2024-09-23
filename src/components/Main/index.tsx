import * as S from "./styles";

interface MainProps {
  title: string;
  description: string;
}

const Main = ({
  title = "React Avançado",
  description = "Typescript, ReactJS, NextJS e Styled Components",
}: MainProps) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React avançado ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela"
      />
    </S.Wrapper>
  );
};

export default Main;
