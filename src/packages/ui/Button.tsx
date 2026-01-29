import { Button as ChakraButton } from "@chakra-ui/react";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import Link from "next/link";

type Props = PropsWithChildren<{
    href: string;
}> & ComponentPropsWithRef<typeof ChakraButton>;


export function Button({href, children, ...rest}: Props) {

    return (
        <ChakraButton as={Link} {...rest} asChild>
            <Link href={href}>
                {children}
            </Link>
        </ChakraButton>
    );
}
