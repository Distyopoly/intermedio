import { AbsoluteCenter, Box, Center, Text } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { VideoGrid } from "./video-layout/VideoGrid";

type Props = ComponentProps<typeof Box>;

export function VideoView(props: Props) {
    return (
        <Box w="100%" h="100%" {...props}>
            <VideoGrid />
        </Box>
    );
}

