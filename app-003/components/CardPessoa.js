import { Pressable, StyleSheet, Text, View } from "react-native";

export const CardPessoa = ({ pessoa, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("PeopleDetails", {
          url: pessoa.url,
        });
      }}
    >
      <View style={styles.container}>
        <Text>{pessoa.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "floralwhite",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
