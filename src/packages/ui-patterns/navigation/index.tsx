"use client";

import { Flex, Spacer } from "@chakra-ui/react";
import { NavbarDrawer } from "./drawer";
import { NavItems } from "./NavItems";
import { Branding } from "./Branding";
import { ComponentProps } from "react";
import { HowTo } from "@/packages/ui-patterns/how-to";

type Props = ComponentProps<typeof Flex> & {
    howto?: React.ReactNode;
};


export function Navbar({ howto = <HowTo />, ...props }: Props) {
    return (
        <Flex
            layerStyle="fill.muted"
            padding={4}
            // mb={{ base: 2, md: 10 }}
            justifyContent="space-between"
            alignItems="center"
            w="full"
            userSelect="none"
            {...props}
        >
            <NavbarDrawer display={{ base: "inline-flex", md: "none" }} />
            <Flex display={{ base: "none", md: "flex" }} gap="7" alignItems="end">
                <Branding />
                <Spacer />
                <NavItems direction="row" gap="2" w="full" />
            </Flex>
            <Spacer />
            <Flex display={{ base: "none", md: "flex" }} gap="7" alignItems="start">
                {howto}
            </Flex>
        </Flex>
    );
};

