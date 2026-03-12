"use client";

import useSWR from 'swr';
import ky from "ky";
import { RoomId } from "@entities/room";


function tokenFetcher(roomId: RoomId) {
    const url = `/api/rooms/${roomId}/token`;

    return ky.get(url, {}).json<{ room_access_token: string }>();
}

export function useLiveKitToken(roomId: RoomId) {

    const { data, error, isLoading } = useSWR(
        roomId,
        tokenFetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateIfStale: false,
            refreshInterval: 0,
        }
    );

    console.log(data, "<--------------------");

    return {
        token: data?.room_access_token,
        error,
        isLoading,
    };
}
