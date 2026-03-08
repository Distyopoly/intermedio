import { useMemo } from "react";

function genInviteUrl(roomName: string) {
    return `${window.location.origin}/platform/room/${roomName}`
}

export function useInviteUrl(roomName: string) {
    // encodeURIComponent handles spaces or special characters in room names
    return useMemo(() => genInviteUrl(roomName), [roomName]);
}