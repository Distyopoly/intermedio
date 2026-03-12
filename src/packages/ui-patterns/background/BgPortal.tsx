import { Box, Portal } from "@chakra-ui/react";
import { ComponentProps, PropsWithChildren } from "react";
import { BgImage } from "./BgImage";


type Props = ComponentProps<typeof BgImage> & {
    src?: string;
    themeInvert?: boolean;
}

export function BgPortal({
    src, themeInvert = true,
    position = "fixed",
    w="full",
    h="full",
    ...props }: Props) {
    return (
        <>
            <Portal key={src}>
                <Box position={position} w={w} h={h}>
                    {src && (
                        <BgImage src={src} themeInvert={themeInvert} {...props}/>
                    )}
                </Box>
            </Portal>
        </>
    );
}