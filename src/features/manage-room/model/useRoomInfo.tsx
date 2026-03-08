import { useRoomInfo as useRoomInfoLiveKit } from "@livekit/components-react";
import { RoomMetadataState } from "./room-metadata.reducer";

export function useRoomInfo() {
    const { name, metadata } = useRoomInfoLiveKit();

    const parsedMetadata = JSON.parse(metadata || "{}") as RoomMetadataState;

    return { name, metadata: parsedMetadata };
}
