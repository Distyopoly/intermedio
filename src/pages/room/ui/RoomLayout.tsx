import { PropsWithChildren } from "react";
import { RoomLayoutInner } from "./room-layout";
import { RoomMetadataContextProvider } from "../model/room-metadata.context";

type Props = PropsWithChildren<{
    roomName: string;
}>;

export function RoomLayout({ children, roomName }: Props) {

    const roomHeight = {
        base: "calc(100vh - 8vh)",
        md: "calc(100vh - 16vh)"
    };

    return (
        <RoomMetadataContextProvider>
            <RoomLayoutInner roomName={roomName} initialLayout="split" w="100%" roomHeight={roomHeight} >
                {children}
            </RoomLayoutInner>
        </RoomMetadataContextProvider>
    );
}
