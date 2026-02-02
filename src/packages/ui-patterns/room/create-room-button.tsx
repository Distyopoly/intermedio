"use client";

import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Button>;

export default function CreateRoomButton({ ...props }: Props) {
    const router = useRouter();
    const onRoomCreate = () => {
        const name = nanoid();
        router.push(`/standalone/xo/room/${name}`);
    };

    return (
        <Button {...props} onClick={onRoomCreate}>Create Room</Button>
    );
}