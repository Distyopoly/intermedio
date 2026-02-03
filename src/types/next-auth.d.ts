import NextAuth, { DefaultSession } from "next-auth"

export type UserTier = "guest" | "free" | "member" | "pro";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            id: string
            tier: UserTier
        } & DefaultSession["user"]
    }

    interface User {
        id: string
        tier: UserTier
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        idToken?: string
        id?: string
        tier?: UserTier
    }
}
