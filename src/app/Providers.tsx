"use client"

import { Provider as ChakraProvider } from "@/packages/ui/chakra/provider";
// import { SessionProvider } from "next-auth/react"


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        // <SessionProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        // </SessionProvider>
    );
}
