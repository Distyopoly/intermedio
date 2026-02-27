"use client";

import {
    GridLayout,
    ParticipantTile,
    useTracks,
} from "@livekit/components-react";
import { Track } from "livekit-client";


type Props = {
    h?: string;
};

export function VideoGrid({ h = "100%" }: Props) {
    // Get all camera and screen share tracks
    const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
        ],
        { onlySubscribed: false },
    );

    return (
        <GridLayout tracks={tracks} style={{ height: h }}>
            <ParticipantTile />
        </GridLayout>
    );
}
