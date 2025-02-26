import { OAuthProvider } from "../../../types/Config";

export function GoogleProvider(options: OAuthProvider): OAuthProvider {
  return {
    clientId: options.clientId,
    clientSecret: options.clientSecret,
    scope: options.scope || "openid email profile",
  };
}