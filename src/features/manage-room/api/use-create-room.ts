import useSWRMutation from "swr/mutation";
import ky from "ky";
import { CreateOrUpdateRoomDto, RoomId } from "@entities/room";

async function createRoom(
    url: string,
    { arg }: { arg: { createRoomDto: CreateOrUpdateRoomDto } }
) {
    return ky.post(url, { json: arg.createRoomDto }).json<{ roomId: RoomId }>();
}

export function useCreateRoom() {
    const mutation = useSWRMutation(`/api/rooms`, createRoom);

    return {
        createRoom: mutation.trigger,
        isMutating: mutation.isMutating,
        error: mutation.error,
    };
}
