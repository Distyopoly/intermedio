import { AccessToken, RoomServiceClient } from "livekit-server-sdk";
import { RtcGateway } from "../RtcGateway";
import { createRoom } from "./createRoom";
import { getRoom } from "./getRoom";


// loadlivekit credentials
const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;
const livekitUrl = process.env.LIVEKIT_URL;

export class LivekitRtcGateway implements RtcGateway {

    private roomService: RoomServiceClient;

    constructor() {
        if (!apiKey || !apiSecret || !livekitUrl) {
            throw new Error("Server misconfigured");
        }

        this.roomService = new RoomServiceClient(livekitUrl, apiKey, apiSecret);
    }

    async createRoom(roomId: string, metadata: string): Promise<string> {
        return this.roomService.createRoom({
            name: roomId,
            emptyTimeout: 2 * 60, // 2 minutes
            maxParticipants: 20,
            metadata: metadata
        })
            .then((room) => room.name);
    }

    async existsRoom(roomId: string): Promise<boolean | undefined> {

        return this.roomService.listRooms([roomId]).then(
            (rooms) => rooms.length === 1 ? true : false
        );
    }

    async getRoomMetadataDto(roomId: string): Promise<string | undefined> {
        return this.roomService.listRooms([roomId]).then(
            (rooms) => rooms.length === 1 ? rooms[0].metadata : undefined
        );
    }

    generateRoomAccessToken(roomId: string, participantName: string, isGM: boolean): Promise<string> {
        const at = new AccessToken(apiKey, apiSecret, {
            identity: participantName,
            name: participantName,
        });
        at.addGrant({ roomJoin: true, room: roomId, roomAdmin: isGM });
        return at.toJwt();
    }
};
