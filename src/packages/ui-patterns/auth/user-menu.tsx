import { Avatar } from "@/packages/ui-components/avatar";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/packages/ui-components/menu";
import { Button, HStack, MenuPositioner, Portal, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof HStack>;

export default function UserMenu({ ...props }: Props) {
    const { data: session } = useSession();
    if (session) {
        return (
            <HStack {...props}>
                <MenuRoot positioning={{ placement: "bottom-end" }}>
                    <MenuTrigger rounded="full" focusRing="outside">
                        <Avatar name={session.user?.name ?? ""} src={session.user?.image ?? undefined} />
                    </MenuTrigger>
                    <Portal>
                        <MenuPositioner>
                            <MenuContent>
                                <Text fontWeight="bold" ml={5}>@{session.user?.name}</Text>
                                <MenuItem value="account" asChild>
                                    <Link href="/account">Account</Link>
                                </MenuItem>
                                {/* <MenuItem value="settings">Settings</MenuItem> */}
                                <MenuItem value="logout" onClick={() => signOut()}>Logout</MenuItem>
                            </MenuContent>
                        </MenuPositioner>
                    </Portal>
                </MenuRoot>
            </HStack>
        );
    }

    return (
        <HStack {...props}>
            <Button onClick={() => signIn()}>Login</Button>
        </HStack>
    );
}