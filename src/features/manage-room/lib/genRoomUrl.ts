import { useMemo } from "react";

export function genRoomUrl(roomId: string) {
    return `${window.location.origin}/room/${roomId}`
}

export function useRoomUrl(roomId: string) {
    // encodeURIComponent handles spaces or special characters in room names
    return useMemo(() => genRoomUrl(roomId), [roomId]);
}
