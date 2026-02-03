import { CloseButton } from "@/packages/ui-components/close-button";
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerPositioner, DrawerRoot, DrawerTitle, DrawerTrigger } from "@/packages/ui-components/drawer";
import { Portal } from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";
import { NavItems } from "./NavItems";
import { ColorModeButton } from "@/packages/ui-components/chakra/color-mode";
import { ComponentProps } from "react";
import { VStack } from "@chakra-ui/react";
import { HowTo } from "../how-to";


type Props = ComponentProps<typeof DrawerTrigger> & {};

export function NavbarDrawer({ ...props }: Props) {
    return (
        <DrawerRoot placement="start">
            <DrawerTrigger {...props}>
                <TfiMenu size={24} />
            </DrawerTrigger>
            <Portal>
                <DrawerBackdrop />
                <DrawerPositioner>

                    <DrawerContent>
                        <DrawerHeader textAlign="center">
                            <DrawerTitle fontSize="2xl" letterSpacing={3}>Distyopoly</DrawerTitle>
                        </DrawerHeader>
                        <DrawerBody>
                            <NavItems direction="column" itemProps={{ fontSize: "xl" }} gap={9} mt={7}/>
                        </DrawerBody>
                        <DrawerFooter justifyContent="center">
                            <VStack gap={6}>
                                <HowTo size="xl" px={18}/>
                                <ColorModeButton />
                            </VStack>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerPositioner>
            </Portal>
        </DrawerRoot>
    );
}
