import { AbsoluteCenter, Box, Center, Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Box>;

export default function VideoView(props: Props) {
    return (
        <Box w="100%" h="100%" {...props}>
            <Center>
                <Text>Video View</Text>
            </Center>
        </Box>
    );
}