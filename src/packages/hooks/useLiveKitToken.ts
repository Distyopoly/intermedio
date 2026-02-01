"use client";

import useSWR from 'swr';
import ky from "ky";

const tokenFetcher = (url: string) => ky.get(url, {}).json<{token: string}>();

export function useLiveKitToken(roomName?: string) {

    const queryParams = new URLSearchParams();
    if (roomName) queryParams.append("roomName", roomName);
    const queryString = queryParams.toString();
    const url = `/api/livekit/tokens${queryString ? `?${queryString}` : ""}`;

    const { data, error, isLoading } = useSWR(
        url,
        tokenFetcher
    );

    return {
        token: data?.token,
        error,
        isLoading,
    };
}
