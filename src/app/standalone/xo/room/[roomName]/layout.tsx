import { PropsWithChildren } from "react";
import { RoomLayout as RoomLayoutComponent } from "@/packages/ui-patterns/layout/room-layout";

export default function RoomLayout({ children }: PropsWithChildren) {
    return (
        <RoomLayoutComponent initialLayout="split" w="100%" h="calc(100vh - 16vh)" >
            {children}
        </RoomLayoutComponent>
    );
}