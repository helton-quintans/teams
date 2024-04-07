import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highligth } from "@components/Highligth";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpyty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, serGroups] = useState<string[]>([])
  return (
    <Container>
      <Header />

      <Highligth 
        title='Groups' 
        subtitle='play with your groups'
      />

      <FlatList 
        data={groups} 
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpyty message="How about registering the first class?" />
        )}

      />

      <Button title="Create new group" />

    </Container>
  );
}
