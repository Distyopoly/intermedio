import { MainAreaBackground } from "@/packages/ui-patterns/background";
import { Center } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export default function Layout({children}: Props) {
    return (
        <Center>
            {children}
            <MainAreaBackground key="nous-background" bgImage="url('/nous-background.png')" bgPos="top" bgRepeat="no-repeat" bgSize="cover"/>
        </Center>
    );
}
