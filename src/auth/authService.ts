import * as AuthSession from "expo-auth-session";
import { SPOTIFY_CLIENT_ID, SPOTIFY_SCOPES, SPOTIFY_REDIRECT_URI } from "../config/spotifyConfig";

export const spotifyAuthRequest = () => {
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  return AuthSession.useAuthRequest(
    {
      clientId: SPOTIFY_CLIENT_ID,
      scopes: SPOTIFY_SCOPES,
      usePKCE: true,
      responseType: "code",
      redirectUri: SPOTIFY_REDIRECT_URI,
    },
    discovery
  );
};

export const exchangeCodeForToken = async (code: string) => {
  // placeholder — w produkcji użyj backendu do wymiany tokena
  // lub fetch do tokenEndpoint
  console.log("Exchange code for token:", code);
  return { access_token: "FAKE_ACCESS_TOKEN" };
};
