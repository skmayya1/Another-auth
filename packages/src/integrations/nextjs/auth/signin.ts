import { createAuthorizationURL } from "../../../oauth2/createAuthorizationURL";
import { getAuthorizationEndpoint } from "../utils/getAuthorizationEndpoint";

enum AuthProviders {
  google = "google",
  facebook = "facebook",
  twitter = "twitter",
  github = "github",
}

export async function signin(provider: AuthProviders) {
    const AuthorizationEndpoint = getAuthorizationEndpoint(provider);
    
    if (!AuthorizationEndpoint) {
        throw new Error("Invalid provider");
    }

    const AuthorizationURL = await createAuthorizationURL({
        
    })
}
