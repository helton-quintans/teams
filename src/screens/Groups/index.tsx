import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highligth } from "@components/Highligth";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highligth 
        title='Classes' 
        subtitle='play with your class'
      />
    </Container>
  );
}
