import { Link } from "@/packages/ui-components/link";
import { Stack } from "@chakra-ui/react";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Stack>

export function NavItems({ ...props }: Props) {
    return (
        <nav>
            <Stack {...props}>
                <Link variant="underline" href="/">Home</Link>
                <Link href="/standalone">Standalone</Link>
                <Link href="/platform">Platform</Link>
            </Stack>
        </nav>
    );
}
