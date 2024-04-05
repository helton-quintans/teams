import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highligth } from "@components/Highligth";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />

      <Highligth 
        title='Classes' 
        subtitle='play with your class'
      />

      <GroupCard title='Galera do COD' />
    </Container>
  );
}
