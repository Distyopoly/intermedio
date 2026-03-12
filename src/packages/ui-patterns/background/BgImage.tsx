"use client";

import { useColorMode } from "@/packages/ui-components/chakra/color-mode";
import { Box, Image, Portal } from "@chakra-ui/react";
import NextImage from "next/image";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Image> & {
    src: string;
    themeInvert?: boolean;
    zIndex?: number;
}

export function BgImage({ src, themeInvert = true, zIndex = -1, ...props }: Props) {
    const { colorMode } = useColorMode();

    const filter = (themeInvert && colorMode === "dark") ? "invert(90%)" : undefined;

    return (
        <Box
            // h="92vh"
            bottom="0"
            w="full"
            overflow="hidden"
            zIndex={zIndex}
            {...props}
        >

            <Image
                asChild
                key={src}
                fit="cover"
                objectFit="cover"
                objectPosition="top"
                filter={filter}
                {...props}
            >
                <NextImage
                    src={src}
                    alt="Game Art Cover"
                    fill
                    priority
                />
            </Image>
        </Box>

    );
}