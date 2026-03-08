
"use client";

import { PropsWithChildren } from "react";
import { RoomLayoutInner } from "./room-layout";
import { RoomMetadataContextProvider } from "@features/manage-room";
import { getDefaultGameDerivation } from "@entities/game-derivation";
import { RoomMetadataState } from "@features/manage-room";
import { LayoutContextProvider } from "@livekit/components-react";

type Props = PropsWithChildren<{
    roomName: string;
}>;

export function RoomLayout({ children, roomName }: Props) {

    const roomHeight = {
        base: "calc(100vh - 8vh)",
        md: "calc(100vh - 16vh)"
    };

    const roomMetadata = {
        roomName,
        roomBehaviour: "video",
        gameDerivation: getDefaultGameDerivation()
    } satisfies RoomMetadataState;

    return (
        <RoomMetadataContextProvider roomMetadata={roomMetadata} >
            <LayoutContextProvider>
                <RoomLayoutInner w="100%" roomHeight={roomHeight} >
                    {children}
                </RoomLayoutInner>
            </LayoutContextProvider>
        </RoomMetadataContextProvider>
    );
}
