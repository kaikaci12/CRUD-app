import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    <SafeAreaView>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Manage your Todo List" }}
        />
      </Stack>
    </SafeAreaView>
  );
}
