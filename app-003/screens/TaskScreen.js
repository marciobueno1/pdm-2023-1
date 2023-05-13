import { ActivityIndicator, FlatList, Text, View } from "react-native";
import useSWR, { useSWRConfig } from "swr";

import { CardTask } from "../components/CardTask";
import { getTasks, updateTask } from "../api/task";

export const TaskScreen = ({ navigation }) => {
  const { data, error, isLoading, isFetching } = useSWR("Task", getTasks);
  // const { mutate } = useSWRConfig();
  const { mutate } = useSWR("Task", updateTask);

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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isFetching && <Text>IS FETCHING</Text>}
      <FlatList
        style={{ flex: 1 }}
        data={data.results}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <CardTask
            task={item}
            navigation={navigation}
            taskDoneChange={mutate}
          />
        )}
        ListEmptyComponent={() => <Text>No Data</Text>}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 2,
              width: 300,
              backgroundColor: "blue",
              marginVertical: 5,
            }}
          />
        )}
      />
    </View>
  );
};
