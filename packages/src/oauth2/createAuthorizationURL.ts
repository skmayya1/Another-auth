import { AuthClientOptions } from "../types/client";
import { createCodeChallenge } from "./utils";
export async function createAuthorizationURL({
  options,
  state,
  codeVerifier,
  scopes,
  claims,
  redirectURI,
  duration,
  prompt,
  AuthorizationEndpoint,
}: {
  options: AuthClientOptions;
  state: string;
  codeVerifier?: string;
  scopes: string[];
  claims?: string[];
  redirectURI: string;
  duration?: number;
  prompt?: string;
  AuthorizationEndpoint: string;
}): Promise<string> {
  const url = new URL(AuthorizationEndpoint);

  url.searchParams.append("response_type", "code");
  url.searchParams.append("client_id", options.clientId);
  url.searchParams.append("redirect_uri", redirectURI);
  url.searchParams.append("scope", scopes.join(" "));
  url.searchParams.append("state", state);
  if (codeVerifier) {
    const code_challenge = await createCodeChallenge(codeVerifier);
    url.searchParams.append("code_challenge", code_challenge);
    url.searchParams.append("code_challenge_method", "S256");
  }
  if (claims) {
    url.searchParams.append("claims", JSON.stringify(claims));
  }
  if (duration) {
    url.searchParams.append("duration", duration.toString());
  }
  if (prompt) {
    url.searchParams.append("prompt", prompt);
  }
  return url.toString();
}
