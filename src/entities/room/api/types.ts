import * as z from "zod";
import { RoomBehaviourSchema } from "../model/RoomBehaviour";

export const CreateOrUpdateRoomDtoSchema = z.object({
    name: z.string(),
    roomBehaviour: RoomBehaviourSchema,
}).partial();

export type CreateOrUpdateRoomDto = z.infer<typeof CreateOrUpdateRoomDtoSchema>;
