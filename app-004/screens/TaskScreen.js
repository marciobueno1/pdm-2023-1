import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CardTask } from "../components/CardTask";
import { getTasks, updateTask } from "../api/task";

export const TaskScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const mutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

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
            taskDoneChange={mutation.mutate}
          />
        )}
      />
    </View>
  );
};
