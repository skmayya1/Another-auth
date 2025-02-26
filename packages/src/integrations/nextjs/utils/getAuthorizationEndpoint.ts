const ENDPOINTS = [
  {
    provider: "google",
    endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  },
  {
    provider: "facebook",
    endpoint: "https://www.facebook.com/v12.0/dialog/oauth",
  },
  {
    provider: "twitter",
    endpoint: "https://api.twitter.com/oauth/authenticate",
  },
  {
    provider: "github",
    endpoint: "https://github.com/login/oauth/authorize",
  },
];

export function getAuthorizationEndpoint(provider: string) {
  const endpoint = ENDPOINTS.find((e) => e.provider === provider);
  return endpoint ? endpoint.endpoint : null;
}
