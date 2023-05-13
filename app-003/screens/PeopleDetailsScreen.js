import { ActivityIndicator, Text, View } from "react-native";
import axios from "axios";
import useSWR from "swr";

export const PeopleDetailsScreen = ({ route }) => {
  const { url } = route.params;
  const { data, error, isLoading } = useSWR(url, (url) =>
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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>{data.name}</Text>
      {Object.keys(camposMapeados).map((campo) => (
        <Text key={campo}>
          {camposMapeados[campo]}: {data[campo]}
        </Text>
      ))}
    </View>
  );
};

const camposMapeados = {
  height: "Altura",
  birth_year: "Ano de Nascimento",
  hair_color: "Cor do cabelo",
  skin_color: "Cor da pele",
};
