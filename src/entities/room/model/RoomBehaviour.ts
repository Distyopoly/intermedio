import * as z from "zod";

export const RoomBehaviourSchema = z.enum(["no-video", "video"]);
export type RoomBehaviour = z.infer<typeof RoomBehaviourSchema>;
// FIXME: make it enum for easier refactors and change options to proper domain
