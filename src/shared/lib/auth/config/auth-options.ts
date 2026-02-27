import { NextAuthOptions, User } from "next-auth"
import { guestProvider } from "./guest-provider";
import { googleProvider } from "./google-provider";

export const authOptions: NextAuthOptions = {
    providers: [
        googleProvider,
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
