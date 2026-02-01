"use client";

import { PropsWithChildren, use } from "react";
import { RoomLayout as RoomLayoutComponent } from "@/packages/ui-patterns/layout/room-layout";
import { useBreakpointValue } from "@chakra-ui/react";
import { RoomContextProvider } from "@/packages/ui-patterns/conference/room-context-provider";
import { useLiveKitToken } from "@/packages/hooks/useLiveKitToken";

type Props = PropsWithChildren<{
    params: Promise<{ roomName: string }>;
}>;

export default function RoomLayout({ children, params }: Props) {
    const { roomName } = use(params);
    

    const roomHeight = useBreakpointValue({ 
        base: "calc(100vh - 8vh)", 
        md: "calc(100vh - 16vh)" 
    });
    
    const { token, error, isLoading } = useLiveKitToken(roomName);

    if (error) {
        return <p>Failed to fetch room token {error}</p>;
    }

    if (isLoading) {
        return <p>Fetching room token...</p>;
    }

    if (!token) {
        return <p>Failed to fetch room token</p>;
    }
    
    return (
        <RoomContextProvider token={token}>
            <RoomLayoutComponent initialLayout="split" w="100%" h={roomHeight} >
                {children}
            </RoomLayoutComponent>
        </RoomContextProvider>
    );
}
