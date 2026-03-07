"use client";

import { useParams } from "next/navigation";
import { RoomInviteButton } from "./RoomInviteButton";

export const RoomInvite = () => {
    const params = useParams();
    const roomName = params?.roomName as string | undefined;

    if (!roomName) return null;

    return <RoomInviteButton />;
}
