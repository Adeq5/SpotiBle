import { exchangeCodeForToken } from "../auth/authService";

export const loginToSpotify = async (code: string) => {
  const tokenData = await exchangeCodeForToken(code);
  return tokenData;
};
