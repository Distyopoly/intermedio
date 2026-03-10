"use client";

import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";
import { ComponentProps, useContext } from "react";
import { RoomDraftContext } from "@features/manage-room";
import { genRoomUrl } from "../../lib/genRoomUrl";

type Props = ComponentProps<typeof Button> & {
};

export function CreateRoomButton({ ...props }: Props) {
    const router = useRouter();

    const { roomDraft } = useContext(RoomDraftContext);

    const onRoomCreate = () => {
        const name = roomDraft.roomName;
        router.push(genRoomUrl(name));
    };

    return (
        <Button {...props} onClick={onRoomCreate}>Create Room</Button>
    );
}
