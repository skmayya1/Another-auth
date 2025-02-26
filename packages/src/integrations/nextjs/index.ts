import { AnotherAuth, AuthConfig } from "../../types/Config";
import { handler as importedHandler } from "./handler";

export function AnotherAuth({
    Providers,
}: AuthConfig):AnotherAuth { 
    return {
        handler: () => importedHandler({Providers}),
        signin: () => console.log("signin"),
        signout: () => console.log("signout"),
        auth: () => console.log("auth"),
    }
}

const { auth , handler ,signin ,signout} = AnotherAuth({
    Providers: {
        github: {
            clientId: "123",
            clientSecret: "123",
        }
    }
})