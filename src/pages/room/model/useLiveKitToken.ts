"use client";

import useSWR from 'swr';
import ky from "ky";


function tokenFetcher(roomName: string) {
    const url = `/api/livekit/token?roomName=${roomName}`;

    return ky.get(url, {}).json<{ token: string }>();
}

export function useLiveKitToken(roomName?: string) {

    const { data, error, isLoading } = useSWR(
        roomName ? roomName : null,
        tokenFetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateIfStale: false,
            refreshInterval: 0,
        }
    );

    return {
        token: data?.token,
        error,
        isLoading,
    };
}
