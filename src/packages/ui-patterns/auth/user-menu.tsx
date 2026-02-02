
"use client";
import { Avatar } from "@/packages/ui-components/avatar";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/packages/ui-components/menu";
import { Button, ClientOnly, HStack, MenuPositioner, Portal, SkeletonCircle, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { ComponentProps } from "react";
import SignOutButton from "./signout-button";
import LoginButton from "./login-button";


type Props = ComponentProps<typeof HStack>;

export default function UserMenu(props: Props) {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <HStack {...props}>
                <SkeletonCircle size="10" />
            </HStack>
        );
    }

    if (session) {
        return (
            <HStack {...props}>
                <ClientOnly fallback={<SkeletonCircle size="10" />}>
                    <MenuRoot positioning={{ placement: "bottom-end" }}>
                        <MenuTrigger rounded="full" focusRing="outside">
                            <Avatar name={session.user?.name ?? ""} src={session.user?.image ?? undefined} />
                        </MenuTrigger>
                        <Portal>
                            <MenuPositioner>
                                <MenuContent gap={3}>
                                    <Text fontWeight="bold" ml={5} mb={6}>@{session.user?.name}</Text>
                                    <MenuItem value="account" asChild>
                                        <Link href="/account">Account</Link>
                                    </MenuItem>
                                    {/* <MenuItem value="settings">Settings</MenuItem> */}
                                    <MenuItem value="logout" asChild>
                                        <SignOutButton variant="plain" mt={2} />
                                    </MenuItem>
                                </MenuContent>
                            </MenuPositioner>
                        </Portal>
                    </MenuRoot>
                </ClientOnly>
            </HStack>
        );
    }

    return (
        <HStack {...props}>
            <LoginButton />
        </HStack>
    );
}