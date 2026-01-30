import { HStack } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { ColorModeButton } from "@/packages/ui-components/chakra/color-mode";


type Props = ComponentProps<typeof HStack>

export function Footer({ ...props }: Props) {
    return (
        <footer>
                <HStack position="fixed" bottom="0"
                alignItems="center" justifyContent="center" w="full" gap="3" {...props}>
                    <p>Version 1.0.0</p>
                    <ColorModeButton variant="surface" opacity={0.3}/>
                    <p>© 2026 Distyopoly</p>
                </HStack>
        </footer>
    );
}