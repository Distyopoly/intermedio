"use client";

import { Flex, Spacer } from "@chakra-ui/react";
import { NavbarDrawer } from "./drawer";
import { NavItems } from "./NavItems";
import { Branding } from "./Branding";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Flex>;


export function Navbar({ ...props }: Props) {
    return (
        <Flex
            bg={"bg.emphasized"}
            color={"bg.inverted"}
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
        </Flex>
    );
};

