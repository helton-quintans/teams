import { Container, Title, SubTitle } from "./styles";

type HighligthProps = {
  title: string;
  subtitle: string;
};

export function Highligth({ title, subtitle }: HighligthProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
