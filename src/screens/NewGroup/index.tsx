import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styled";
import { Highligth } from "@components/Highligth";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highligth 
          title="New Group"
          subtitle="Create a new group for add people"
        />

        <Input />

        <Button 
          title="Create"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  );
}
