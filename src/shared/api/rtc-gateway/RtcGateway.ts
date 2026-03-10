export interface RtcGateway {
    createRoom(roomId: string, metadata: string): Promise<string>;
    getRoomMetadataDto(roomId: string): Promise<string | undefined>;
    existsRoom(roomId: string): Promise<boolean | undefined>;
    generateRoomAccessToken(roomId: string, participantName: string, isGM: boolean): Promise<string>;
}
