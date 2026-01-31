import { CloseButton } from "@/packages/ui-components/close-button";
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerPositioner, DrawerRoot, DrawerTitle, DrawerTrigger } from "@/packages/ui-components/drawer";
import { Portal } from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";
import { NavItems } from "./NavItems";
import { ColorModeButton } from "@/packages/ui-components/chakra/color-mode";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof DrawerTrigger> & {
    howto: React.ReactNode;
};

export function NavbarDrawer({ howto, ...props }: Props) {
    return (
        <DrawerRoot placement="start">
            <DrawerTrigger {...props}>
                <TfiMenu size={24} />
            </DrawerTrigger>
            <Portal>
                <DrawerBackdrop />
                <DrawerPositioner>

                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Distyopoly</DrawerTitle>
                        </DrawerHeader>
                        <DrawerBody>
                            <NavItems direction="column" itemProps={{ fontSize: "xl" }} gap={4} mt={2}/>
                        </DrawerBody>
                        <DrawerFooter justifyContent="center">
                            <ColorModeButton />
                            {howto}
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerPositioner>
            </Portal>
        </DrawerRoot>
    );
}
