import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { useState } from "react";

export const HomeScreen = ({ navigation }) => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text h1 h1Style={styles.text}>
            Cálculo
          </Text>
          <Input
            value={valor1}
            onChange={(text) => setValor1(text)}
            placeholder="Digite um valor"
          />
          <Input
            value={valor2}
            onChange={(text) => setValor2(text)}
            placeholder="Digite um valor"
          />
          <Text style={styles.text}>Resultado</Text>
          <Button
            title="Go to Details '86'"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("Details", {
                itemId: 86,
                otherParam: "anything you want here",
              });
            }}
          />
          <Button
            title="Star Wars People"
            onPress={() => {
              navigation.navigate("People");
            }}
          />
          <Button
            title="Lista de Tarefas"
            onPress={() => {
              navigation.navigate("Task");
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "red",
  },
  text: {
    color: "black",
  },
});
