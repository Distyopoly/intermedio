import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from "@/packages/ui-components/drawer";
import { TfiMenu } from "react-icons/tfi";
import { NavItems } from "../../NavItems";
import { ColorModeButton } from "@/packages/ui-components/chakra/color-mode";
import { ComponentProps } from "react";
import { VStack } from "@chakra-ui/react";
import { Playbook } from "@features/playbook";

type Props = ComponentProps<typeof DrawerTrigger> & {};

export function NavbarDrawer({ ...props }: Props) {
    return (
        <DrawerRoot placement="start">
            <DrawerTrigger {...props}>
                <TfiMenu size={24} />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader textAlign="center">
                    <DrawerTitle fontSize="2xl" letterSpacing={3}>Distyopoly</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <NavItems direction="column" itemProps={{ fontSize: "xl" }} gap={9} mt={7} />
                </DrawerBody>
                <DrawerFooter justifyContent="center">
                    <VStack gap={6}>
                        <Playbook size="xl" px={18} />
                        <ColorModeButton />
                    </VStack>
                </DrawerFooter>
            </DrawerContent>
        </DrawerRoot>
    );
}
