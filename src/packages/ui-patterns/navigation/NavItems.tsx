import { Link } from "@/packages/ui-components/link";
import { Stack } from "@chakra-ui/react";
import { ComponentProps, ComponentPropsWithRef } from "react";


type Props = ComponentProps<typeof Stack> & {
    itemProps?: Omit<ComponentPropsWithRef<typeof Link>, "href">
}

export function NavItems({ itemProps, ...props }: Props) {
    return (
        <nav>
            <Stack {...props}>
                {items.map((item) => (
                    <Link {...itemProps} href={item.href} key={item.name}>
                        {item.name}
                    </Link>
                ))}
            </Stack>
        </nav>
    );
}

const items = [
    { name: "Home", href: "/" },
    { name: "Standalone", href: "/standalone" },
    { name: "Platform", href: "/platform" },
    { name: "Roadmap Voting", href: "/roadmap-voting" },
]
