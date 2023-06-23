import { Slot } from "expo-router";
import { Provider } from "../context/auth";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <Provider>
        
        <SafeAreaProvider>
            

            <StatusBar style="light"  backgroundColor="white"  />
      <Slot />
      </SafeAreaProvider>
    </Provider>
  );
}