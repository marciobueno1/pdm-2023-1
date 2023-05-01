import { StyleSheet, Text, View, Switch } from "react-native";

export const CardTask = ({ task, taskDoneChange }) => {
  const handleChange = () => {
    taskDoneChange({ objectId: task.objectId, done: !task.done });
  };
  return (
    <View style={styles.container}>
      <Text>
        {task.description} - {task.done ? "feita" : "a fazer"}
      </Text>
      <Switch value={task.done} onValueChange={handleChange} />
    </View>
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
