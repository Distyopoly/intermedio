import z from "zod";
import { RoomBehaviourSchema } from "./RoomBehaviour";

export const RoomIdSchema = z.string();
export type RoomId = z.infer<typeof RoomIdSchema>;

export const RoomSchema = z.object({
    id: RoomIdSchema,
    gameMaster: z.string(),
    name: z.string(),
    roomBehaviour: RoomBehaviourSchema.default("video"),
});

export type Room = z.infer<typeof RoomSchema>;
