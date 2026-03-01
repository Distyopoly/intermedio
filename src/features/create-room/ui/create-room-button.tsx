"use client";

import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";
import { ComponentProps, useContext } from "react";
import { RoomDraftContext } from "@features/manage-room";

type Props = ComponentProps<typeof Button> & {
    roomPrefix: string;
};

export function CreateRoomButton({ roomPrefix, ...props }: Props) {
    const router = useRouter();

    const { roomDraft } = useContext(RoomDraftContext);

    const onRoomCreate = () => {
        const name = roomDraft.roomName;
        router.push(`${roomPrefix}/${name}`);
    };

    return (
        <Button {...props} onClick={onRoomCreate}>Create Room</Button>
    );
}