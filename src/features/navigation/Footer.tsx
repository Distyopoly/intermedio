import { HStack, Link } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { ColorModeButton } from "@/packages/ui-components/chakra/color-mode";


type Props = ComponentProps<typeof HStack>

export function Footer({ ...props }: Props) {
    return (
        <footer>
                <HStack position="fixed" bottom="0"
                alignItems="center" justifyContent="center" w="full" gap="3" {...props}>
                    <Link href={process.env.NEXT_PUBLIC_DOCS_PAGE!} target="_blank">For Developers</Link>
                    <ColorModeButton variant="ghost" opacity={0.3}/>
                    <p>© 2026 Distyopoly</p>
                </HStack>
        </footer>
    );
}