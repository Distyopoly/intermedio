import { Box, ClientOnly, Portal } from "@chakra-ui/react";
import Image from "next/image";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Box> & {
    src?: string;
}

export function MainAreaBackground({ src, ...props }: Props) {
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
                        <Image
                            src={src}
                            alt="Background"
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "top",
                            }}
                            priority
                        />
                    )}
                </Box>
            </ClientOnly>
        </Portal>
    );
}