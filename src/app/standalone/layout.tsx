import { MainAreaBackground } from "@/packages/ui-patterns/background";
import { GameMetadataProvider } from "@/packages/ui-patterns/room/game-metadata-provider";
import { Center } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export default function Layout({children}: Props) {
    return (
        <Center>
            <GameMetadataProvider>
                {children}
            </GameMetadataProvider>
        </Center>
    );
}
