import { HStack } from "@chakra-ui/react";
import { DisconnectButton, TrackToggle, ChatToggle, StartMediaButton } from "@livekit/components-react";
import { Track } from "livekit-client";
import { ComponentProps } from "react";
import { RoomInvite } from "@features/manage-room";

type Props = ComponentProps<typeof HStack>;

export function ControlBar(props: Props) {
    return (
        <HStack justifyContent="center" {...props}>
            <RoomInvite />
            <TrackToggle source={Track.Source.Microphone}> Microphone</TrackToggle>
            <TrackToggle source={Track.Source.Camera}> Camera</TrackToggle>
            {/* {isGameMaster && <Button onClick={() => restartMatch()}>Restart Match</Button>} */}
            <ChatToggle>
                Chat
            </ChatToggle>
            <StartMediaButton label="Click to allow media playback" />
            <DisconnectButton>Leave Room</DisconnectButton>
        </HStack>
    );
}
