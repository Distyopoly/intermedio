import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { PropsWithChildren, ComponentPropsWithRef } from "react";

type Props = PropsWithChildren<{
    href: string;
    
}> & ComponentPropsWithRef<typeof ChakraLink>;

export function Link({ href, children, ...rest }: Props) {
    return (
        <ChakraLink href={href} {...rest} asChild>
            <NextLink href={href}>{children}</NextLink>
        </ChakraLink>
    );
}
