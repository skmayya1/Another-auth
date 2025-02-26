import { OAuthProvider } from "../../../types/Config";

export function GithubProvider(options: OAuthProvider): OAuthProvider {
  return {
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    scope: options.scope || "user:email",
  };
}