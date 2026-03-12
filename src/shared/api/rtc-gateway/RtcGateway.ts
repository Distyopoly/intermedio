import { MetadataDto } from "./livekit/types";

export interface RtcGateway {
    createRoom(metadata: string): Promise<string>;
    getRoomMetadataDto(roomId: string): Promise<string | undefined>;
    existsRoom(roomId: string): Promise<boolean | undefined>;
    generateRoomAccessToken(roomId: string, participantName: string, isGM: boolean): Promise<string>;
    updateRoom(roomId: string, metadata: string): Promise<void>;
}
