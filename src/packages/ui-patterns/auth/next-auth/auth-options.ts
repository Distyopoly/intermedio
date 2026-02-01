import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { guestProvider } from "./guest-provider";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        guestProvider
    ],
    callbacks: {
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.sub!;
                session.user.name = token.name;
                session.user.image = token.picture;
            }
            return session;
        },
    },
}
