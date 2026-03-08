import { Chat } from "@livekit/components-react";
import { Box } from "@chakra-ui/react";

export function ChatPanel() {
    return (
        <Box maxH="100%" w="100%" position="relative" top="0" left="0">
            <Chat style={{ height: "100%", width: "100%" }} />
        </Box>
    );
}
