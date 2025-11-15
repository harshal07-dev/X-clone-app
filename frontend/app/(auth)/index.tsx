import { useSocialAuth } from "@/hooks/useSocialAuth";
import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  // const isLoading = false;
  const { handleSocialAuth, isLoading } = useSocialAuth();
  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-1 justify-between px-8">
        <View className="flex-1 justify-center">
          {/* auth banner image */}
          <View className="items-center ">
            <Image
              source={require("../../assets/images/auth1.png")}
              className="size-96"
              resizeMode="contain"
            />
          </View>
          {/* buttons */}
          <View className="flex-col gap-2">
            {/* google btn */}
            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => {
                handleSocialAuth("oauth_google");
              }}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <View className="flex-row items-center justify-center">
                {isLoading ? (
                  <ActivityIndicator size="small" color="#000" />
                ) : (
                  <>
                    <Image
                      source={require("../../assets/images/google.png")}
                      className="size-10"
                      resizeMode="contain"
                    />
                    <Text className="font-bold text-center text-base">
                      Continue with Google
                    </Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
            {/* apple btn */}
            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => {
                handleSocialAuth("oauth_apple");
              }}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <View className="flex-row items-center justify-center">
                {isLoading ? (
                  <ActivityIndicator size="small" color="#000" />
                ) : (
                  <>
                    <Image
                      source={require("../../assets/images/apple.png")}
                      className="size-8"
                      resizeMode="contain"
                    />
                    <Text className="font-bold text-center text-base">
                      Continue with Apple
                    </Text>
                  </>
                )}
              </View>
            </TouchableOpacity>
          </View>
          {/* Terms and policies  */}
          <Text className="text-center font-semibold text-gray-500 text-xs leading-4 mt-6 px-2">
            By signing up, you agree to our{" "}
            <Text className="text-blue-500">Terms</Text>
            {","}
            <Text className="text-blue-500"> Privacy</Text>
            {","}
            <Text className="text-blue-500"> Policies</Text>
            {" and"}
            <Text className="text-blue-500"> Cookie Use.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
