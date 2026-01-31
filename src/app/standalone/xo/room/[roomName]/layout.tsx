"use client";

import { PropsWithChildren } from "react";
import { RoomLayout as RoomLayoutComponent } from "@/packages/ui-patterns/layout/room-layout";
import { useBreakpointValue } from "@chakra-ui/react";

export default function RoomLayout({ children }: PropsWithChildren) {
    const roomHeight = useBreakpointValue({ 
        base: "calc(100vh - 8vh)", 
        md: "calc(100vh - 16vh)" 
    });
    
    return (
        <RoomLayoutComponent initialLayout="split" w="100%" h={roomHeight} >
            {children}
        </RoomLayoutComponent>
    );
}
