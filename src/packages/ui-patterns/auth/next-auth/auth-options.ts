import { NextAuthOptions, User } from "next-auth"
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
        async jwt({ token, user }) {
            if (user) {
                token.tier = (user as User).tier;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.sub!;
                session.user.name = token.name;
                session.user.image = token.picture;
                session.user.tier = token.tier || "free";
            }
            return session;
        },
    },
}
