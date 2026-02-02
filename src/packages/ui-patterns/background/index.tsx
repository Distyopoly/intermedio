"use client";

import { useColorMode } from "@/packages/ui-components/chakra/color-mode";
import { Box, ClientOnly, Image, Portal } from "@chakra-ui/react";
import NextImage from "next/image";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Box> & {
    src?: string;
    invert?: boolean;
}

export function MainAreaBackground({ src, invert=true, ...props }: Props) {
    const { colorMode } = useColorMode();

    const filter = (invert && colorMode === "dark") ? "invert(90%)" : undefined;
 
    return (
        <Portal key={src}>
            <ClientOnly>
                <Box
                    h="92vh"
                    bottom="0"
                    position="fixed"
                    w="full"
                    zIndex={-1}
                    overflow="hidden"
                    {...props}
                >
                    {src && (
                        <Image asChild fit="cover" objectFit="cover" objectPosition="top"
                            filter={filter}
                        >
                            <NextImage
                                src={src}
                                alt="Game Art Cover"
                                fill
                                priority
                            />
                        </Image>
                    )}
                </Box>
            </ClientOnly>
        </Portal>
    );
}