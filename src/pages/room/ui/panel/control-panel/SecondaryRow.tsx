import { HStack } from "@chakra-ui/react";
import { TrackToggle } from "@livekit/components-react";
import { Track } from "livekit-client";
import { StartMediaButton } from "@livekit/components-react";
import { DisconnectButton } from "@livekit/components-react";
import { ComponentProps } from "react";

export function SecondaryRow(props: ComponentProps<typeof HStack>) {
    return (
        <HStack justifyContent="center" w="full" {...props}>
            <TrackToggle source={Track.Source.Microphone}></TrackToggle>
            <TrackToggle source={Track.Source.Camera}></TrackToggle>
            <StartMediaButton label="Click to allow media playback" />
            <DisconnectButton>Leave Room</DisconnectButton>
        </HStack>
    );
}
