export interface AuthConfig {
  Providers: Partial<Record<SocialProviderName, OAuthProvider>>;
}

export type SocialProviderName =
  | "github"
  | "google"
  | "discord"
  | (string & {});

export interface OAuthProvider {
  clientId: string;
  clientSecret: string;
  scope?: string;
}

export interface AnotherAuth {
  handler: ({ }:AuthConfig) => void;
  signin: () => void;
  signout: () => void;  
  auth: () => void;
}

