import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highligth } from "@components/Highligth";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, serGroups] = useState<string[]>(['Galera do COD'])
  return (
    <Container>
      <Header />

      <Highligth 
        title='Classes' 
        subtitle='play with your class'
      />

      <FlatList 
        data={groups} 
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}

      />

      {/* <GroupCard title='Galera do COD' /> */}
    </Container>
  );
}
