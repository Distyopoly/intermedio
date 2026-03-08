import { RoomProvider } from "@app/providers";
import { Center } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export default function Layout({ children }: Props) {
    return (
        <Center>
            <RoomProvider>
                {children}
            </RoomProvider>
        </Center>
    );
}
