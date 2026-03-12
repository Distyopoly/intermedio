"use client";

import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";
import { ComponentProps, useContext } from "react";
import { RoomSettingsContext } from "@features/manage-room";
import { genRoomUrl } from "../../lib/genRoomUrl";
import { CreateOrUpdateRoomDto } from "@entities/room";
import { RoomId } from "@entities/room";
import { useCreateRoom } from "@features/manage-room/api/use-create-room";


type Props = ComponentProps<typeof Button> & {
    // createTrigger: (createRoomDto: CreateOrUpdateRoomDto) => Promise<{ roomId: RoomId }>;
};

export function CreateRoomButton({ ...props }: Props) {
    const router = useRouter();

    const { roomSettings } = useContext(RoomSettingsContext);
    const { createRoom } = useCreateRoom();


    const onRoomCreate = async () => {
        const { roomId } = await createRoom({
            createRoomDto: roomSettings.room
        });

        router.push(genRoomUrl(roomId));
    };

    return (
        <Button {...props} onClick={onRoomCreate}>Create Room</Button>
    );
}
