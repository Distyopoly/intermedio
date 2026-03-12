import { CreateOrUpdateRoomDto, CreateOrUpdateRoomDtoSchema } from "./types";
import { metadataDtoToRoomRaw, RoomRawToMetadataDto } from "./mapper";
import { rtcGateway } from "@shared/api/rtc-gateway";
import { RoomSchema } from "../model/Room";
import { Room } from "../model/Room";

class RoomService {
    async createRoom(createRoomDtoRaw: CreateOrUpdateRoomDto, userId: string) {
        console.log(userId, ".<--------------------");

        const createRoomDto = CreateOrUpdateRoomDtoSchema.parse(createRoomDtoRaw);

        const createRoomRaw = RoomRawToMetadataDto({
            ...createRoomDto,
            gameMaster: userId,
        });

        const roomId = await rtcGateway.createRoom(createRoomRaw);

        const room = RoomSchema.parse({
            ...createRoomDto,
            gameMaster: userId,
            id: roomId
        });

        return room;
    }

    async getRoom(roomId: string) {
        const metadataDto = await rtcGateway.getRoomMetadataDto(roomId);
        if (!metadataDto) {
            return undefined;
        }
        const room = metadataDtoToRoomRaw(metadataDto, roomId);
        const roomParsed = RoomSchema.parse(room);
        return roomParsed;
    }

    async generateAccessToken(room: Room, userId: string) {
        const isGM = room.gameMaster === userId;
        return rtcGateway.generateRoomAccessToken(room.id, userId, isGM);
    }

    async updateRoom(roomId: string, updateRoomDto: CreateOrUpdateRoomDto) {
        // const parsedDto = CreateOrUpdateRoomDtoSchema.parse(updateRoomDto);
        // const room = metadataDtoToRoomRaw(JSON.stringify(parsedDto));
        // rtcGateway.updateRoom(roomId, JSON.stringify(room));
    }
}

export default RoomService;
