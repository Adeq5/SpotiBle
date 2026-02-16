import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { spotifyAuthRequest, exchangeCodeForToken } from "../auth/authService";

export const useSpotifyAuth = () => {
  const [request, response, promptAsync] = spotifyAuthRequest();

  const mutation = useMutation({
    mutationFn: async (code: string) => {
      return await exchangeCodeForToken(code);
    },
  });

  useEffect(() => {
    if (response?.type === "success") {
      const code = response.params.code;
      mutation.mutate(code);
    }
  }, [response]);

  return { request, promptAsync, mutation };
};
