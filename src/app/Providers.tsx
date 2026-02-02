"use client"

import { ColorModeProvider } from "@/packages/ui-components/chakra/color-mode";
import { Provider as ChakraProvider } from "@/packages/ui-components/chakra/provider";
import { SessionProvider } from "next-auth/react"


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <ChakraProvider>
                <ColorModeProvider>
                    {children}
                </ColorModeProvider>
            </ChakraProvider>
        </SessionProvider>
    );
}
