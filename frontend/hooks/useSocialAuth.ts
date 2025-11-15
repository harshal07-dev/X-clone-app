import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    setIsLoading(true);
    try {
      const { createSessionId, setActive } = await startSSOFlow({ strategy });
      if (createSessionId && setActive) {
        await setActive({ session: createSessionId });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, handleSocialAuth };
};
