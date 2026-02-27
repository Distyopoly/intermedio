"use client";

import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof Button>;

export default function SignOutButton(props: Props) {
    return (
        <Button {...props} onClick={() => signOut()}>Logout</Button>
    );
}
