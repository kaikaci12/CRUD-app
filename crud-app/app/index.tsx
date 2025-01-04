import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { todoLists as initialTodos } from "../data/todos";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function Index() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodoList = () => {
    if (todo.trim()) {
      const newTodo = {
        id: Date.now(),
        task: todo,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
          <TextInput
            value={todo}
            onChangeText={(text) => setTodo(text)}
            style={styles.input}
            placeholder="Add a new task"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddTodoList}
          >
            <Text style={styles.addButtonText}>Add Todo</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Your Tasks</Text>
          <ScrollView style={styles.scrollContainer}>
            {todos.map((todo) => (
              <View key={todo.id} style={styles.todoItem}>
                <Text
                  style={todo.completed ? styles.completedTask : styles.task}
                >
                  {todo.task}
                </Text>
                <TouchableOpacity onPress={() => handleDeleteTodo(todo.id)}>
                  <AntDesign name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
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
  addButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
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
    flex: 1,
  },
  completedTask: {
    fontSize: 16,
    color: "#888",
    textDecorationLine: "line-through",
    flex: 1,
  },
});
