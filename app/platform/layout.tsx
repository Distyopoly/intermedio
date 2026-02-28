
import { LoginRequired } from "@features/auth";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {

    return (
        <LoginRequired>
            {children}
        </LoginRequired>
    );
}
