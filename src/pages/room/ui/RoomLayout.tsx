"use client";

import { PropsWithChildren } from "react";
import { RoomLayoutInner } from "./room-layout";
import { RoomMetadataContextProvider } from "@features/manage-room";
import { getDefaultGameDerivation } from "@entities/game-derivation";
import { RoomMetadataState } from "@features/manage-room";
import { LayoutContextProvider } from "@livekit/components-react";
import { AuthenticatedGuardRedirect } from "@features/auth";

type Props = PropsWithChildren<{
    roomId: string;
}>;

export function RoomLayout({ children, roomId }: Props) {

    const roomHeight = {
        base: "calc(100vh - 8vh)",
        md: "calc(100vh - 16vh)"
    };

    const roomMetadata = {
        id: roomId,
        roomBehaviour: "video",
        gameDerivation: getDefaultGameDerivation()
    } satisfies RoomMetadataState;

    return (
        <AuthenticatedGuardRedirect>
        <RoomMetadataContextProvider roomMetadata={roomMetadata} >
            <LayoutContextProvider>
                <RoomLayoutInner w="100%" roomHeight={roomHeight} roomId={roomId} >
                    {children}
                </RoomLayoutInner>
            </LayoutContextProvider>
        </RoomMetadataContextProvider>
        </AuthenticatedGuardRedirect>
    );
}
