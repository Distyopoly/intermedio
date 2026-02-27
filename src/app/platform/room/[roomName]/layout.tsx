import { PropsWithChildren, use } from "react";
import { RoomLayout as RoomLayoutComponent } from "@/features/room/layout/room-layout";
import { RoomProvider } from "@/features/room/game-derivation/game-derivation-provider";

type Props = PropsWithChildren<{
    params: Promise<{ roomName: string }>;
}>;

export default function RoomLayout({ children, params }: Props) {
    const { roomName } = use(params);


    const roomHeight = {
        base: "calc(100vh - 8vh)",
        md: "calc(100vh - 16vh)"
    };

    return (
        <RoomProvider>
            <RoomLayoutComponent roomName={roomName} initialLayout="split" w="100%" roomHeight={roomHeight} >
                {children}
            </RoomLayoutComponent>
        </RoomProvider>
    );
}
