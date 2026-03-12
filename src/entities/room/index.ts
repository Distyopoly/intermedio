import RoomService from "./api/RoomService";

export type { RoomBehaviour } from "./model/RoomBehaviour";
export type { Room } from "./model/Room";

export type { CreateOrUpdateRoomDto } from "./api/types";
export type { RoomId } from "./model/Room";

export const roomService = new RoomService();
