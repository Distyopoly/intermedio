import { Box, ClientOnly, Portal } from "@chakra-ui/react";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Box>

export function MainAreaBackground({ ...props }: Props) {
    return (
        <Portal>
            <ClientOnly>
                <Box bgAttachment="fixed"
                    bgClip="border-box"
                    h="92vh"
                    bottom="0"
                    position="fixed"
                    w="full"
                    zIndex={-1}
                    {...props}
                />
            </ClientOnly>
        </Portal>
    );
}