import { Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { RoomInvite } from "@features/manage-room";
import { CiChat2, CiSettings } from "react-icons/ci";
import { ChatToggle } from "@livekit/components-react";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof HStack> & {
    secondRowToggle: React.ReactNode;
};


export function MainRow({ secondRowToggle, ...props }: Props) {
    return (
        <HStack {...props}>
            <RoomInvite />
            <IconButton variant="solid"><CiSettings /></IconButton>
            <Button variant="solid">Change Game</Button>
            <Box justifySelf="flex-end">
                <ChatToggle>
                    <CiChat2 />
                </ChatToggle>
            </Box>
            {secondRowToggle}
        </HStack>
    );
}