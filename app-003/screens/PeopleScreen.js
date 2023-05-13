import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import axios from "axios";
import useSWR from "swr";
import { CardPessoa } from "../components/CardPessoa";
import { useState } from "react";

export const PeopleScreen = ({ navigation }) => {
  const [url, setUrl] = useState("https://swapi.dev/api/people/?page=1");
  const { data, error, isLoading, isFetching } = useSWR(url, (url) =>
    axios.get(url).then((res) => res.data)
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const handleBtAnteriorPress = () => {
    setUrl(data.previous);
  };

  const handleBtProximaPress = () => {
    setUrl(data.next);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>People Screen: {data.count}</Text>
      {isFetching && <Text>IS FETCHING</Text>}
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Anterior"
          onPress={handleBtAnteriorPress}
          disabled={!data.previous}
        />
        <Button
          title="Próxima"
          onPress={handleBtProximaPress}
          disabled={!data.next}
        />
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={data.results}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <CardPessoa pessoa={item} navigation={navigation} />
        )}
      />
    </View>
  );
};
