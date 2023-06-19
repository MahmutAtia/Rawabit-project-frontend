import { Text, View } from "react-native";
import { useAuth } from "../../context/auth";
import AppHeader from "../../components/headers/header";

export default function Index() {
  const { signOut, user } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AppHeader />
        <Text>{user}</Text>
      <Text onPress={() => signOut()}>Sign Out</Text>
    </View>
  );
}