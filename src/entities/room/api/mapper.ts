import { CreateOrUpdateRoomDto } from "./types";


export function metadataDtoToRoomRaw(metadataDto: string, roomId: string) {
    const metadata = JSON.parse(metadataDto);
    metadata.id = roomId;
    return metadata;
}

export function RoomRawToMetadataDto(room: 
    CreateOrUpdateRoomDto & { gameMaster: string }) {
    const metadataObject = JSON.stringify(room);

    return metadataObject;
}
