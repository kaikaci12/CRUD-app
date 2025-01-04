import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { todoLists } from "../data/todos";

export default function Index() {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.text}>Your Tasks</Text>
        <ScrollView style={styles.scrollContainer}>
          {todoLists.map((todo) => (
            <View key={todo.id} style={styles.todoItem}>
              <Text style={todo.completed ? styles.completedTask : styles.task}>
                {todo.task}
              </Text>
              <Text style={styles.status}>
                {todo.completed ? "Completed" : "Pending"}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 16,
  },
  inner: {
    width: "100%",
    paddingHorizontal: 16,
    flex: 1,
  },
  input: {
    height: 48,
    borderColor: "#444",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    color: "white",
    backgroundColor: "#1e1e1e",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginBottom: 16,
    fontWeight: "600",
  },
  scrollContainer: {
    flex: 1,
  },
  todoItem: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  task: {
    fontSize: 16,
    color: "white",
  },
  completedTask: {
    fontSize: 16,
    color: "#888",
    textDecorationLine: "line-through",
  },
  status: {
    fontSize: 14,
    color: "#aaa",
  },
});
