import { useMemo } from "react";

export function genRoomUrl(roomName: string) {
    return `${window.location.origin}/room/${roomName}`
}

export function useRoomUrl(roomName: string) {
    // encodeURIComponent handles spaces or special characters in room names
    return useMemo(() => genRoomUrl(roomName), [roomName]);
}