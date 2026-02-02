import { PropsWithChildren, use } from "react";
import { RoomLayout as RoomLayoutComponent } from "@/packages/ui-patterns/layout/room-layout";
import LoginRequired from "@/packages/ui-patterns/auth/login-required";

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
        <LoginRequired>
            <RoomLayoutComponent roomName={roomName} initialLayout="split" w="100%" roomHeight={roomHeight} >
                {children}
            </RoomLayoutComponent>
        </LoginRequired>
    );
}
