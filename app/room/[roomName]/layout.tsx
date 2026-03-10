import { RoomLayout } from "@pages/room";
import { PropsWithChildren, use } from "react";

type Props = PropsWithChildren<{
    params: Promise<{ roomName: string }>;
}>;

export default function Layout({ children, params }: Props) {
    const concreteParams = use(params);
    return (
        <RoomLayout {...concreteParams}>
            {children}
        </RoomLayout>
    );
}
