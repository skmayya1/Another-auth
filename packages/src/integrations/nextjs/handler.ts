import { AuthConfig } from "../../types/Config";


export async function handler(a: AuthConfig) {}

export const auth: AuthConfig = {
  Providers: {
    github: {
      clientId: "GITHUB_CLIENT_ID",
      clientSecret: "GITHUB_CLIENT_SECRET",
    }
  }
};


