"use client";

import { Flex, Spacer } from "@chakra-ui/react";
import { NavbarDrawer } from "./ui/drawer";
import { NavItems } from "./NavItems";
import { Branding } from "./ui/Branding";
import { ComponentProps } from "react";
import { Playbook } from "@features/playbook";
import { UserMenu } from "@widgets/navigation/ui/user-menu";

type Props = ComponentProps<typeof Flex> & {};


export function Navbar({ ...props }: Props) {
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
                <NavItems direction="row" gap="7" w="full" itemProps={{ fontSize: "lg" }} />
            </Flex>
            <Spacer />
            <Flex display={{ base: "none", md: "flex" }} gap="7" alignItems="center">
                <Playbook />
            </Flex>
            <UserMenu ml={50} />
        </Flex>
    );
};

