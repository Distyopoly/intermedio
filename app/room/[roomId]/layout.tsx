import { RoomLayout } from "@pages/room";
import { PropsWithChildren, use } from "react";

type Props = PropsWithChildren<{
    params: Promise<{ roomId: string }>;
}>;

export default function Layout({ children, params }: Props) {
    const concreteParams = use(params);
    

    console.log(concreteParams, "<----------vau------------");
    const roomId = concreteParams.roomId;
    return (
        <RoomLayout {...concreteParams}>
            {children}
        </RoomLayout>
    );
}
