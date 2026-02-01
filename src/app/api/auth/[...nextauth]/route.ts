import NextAuth from "next-auth"
import { authOptions } from "@/packages/ui-patterns/auth/next-auth/auth-options"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
