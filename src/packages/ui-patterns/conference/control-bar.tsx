import { HStack } from "@chakra-ui/react";
import { DisconnectButton, TrackToggle } from "@livekit/components-react";
import { Track } from "livekit-client";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof HStack>;

export function ControlBar(props: Props) {
    return (
        <HStack justifyContent="center" {...props}>
            <TrackToggle source={Track.Source.Microphone}> Microphone</TrackToggle>
            <TrackToggle source={Track.Source.Camera}> Camera</TrackToggle>
            {/* {isGameMaster && <Button onClick={() => restartMatch()}>Restart Match</Button>} */}
            <DisconnectButton>Leave Room</DisconnectButton>
        </HStack>
    );
}