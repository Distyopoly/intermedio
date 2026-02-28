"use client";

import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";
import { ComponentProps, useContext } from "react";
import { RoomSettingsContext } from "@/app/providers";

type Props = ComponentProps<typeof Button> & {
    roomPrefix: string;
};

export function CreateRoomButton({ roomPrefix, ...props }: Props) {
    const router = useRouter();

    const { roomSettings } = useContext(RoomSettingsContext);

    const onRoomCreate = () => {
        const name = roomSettings.roomName;
        router.push(`${roomPrefix}/${name}`);
    };

    return (
        <Button {...props} onClick={onRoomCreate}>Create Room</Button>
    );
}