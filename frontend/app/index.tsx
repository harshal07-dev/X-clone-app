import { View, Text, StatusBar, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useClerk } from "@clerk/clerk-expo";

const HomeScreen = () => {
  const { signOut } = useClerk();
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <Text>HomeScreen</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </SafeAreaView>
  );
};

export default HomeScreen;
