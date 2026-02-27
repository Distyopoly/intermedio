"use client";

import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { ComponentProps, useContext } from "react";
import { RoomSettingsContext } from "./settings/settings-provider";

type Props = ComponentProps<typeof Button> & {
    roomPrefix: string;
};

export default function CreateRoomButton({ roomPrefix, ...props }: Props) {
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