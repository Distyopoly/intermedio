"use client";

import { Center, Box } from "@chakra-ui/react";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    return (
        <Center>
            <Box layerStyle="fill.muted" borderRadius={10} px={10} py={5} mt={10}>
                {children}
            </Box>
        </Center>
    );
}