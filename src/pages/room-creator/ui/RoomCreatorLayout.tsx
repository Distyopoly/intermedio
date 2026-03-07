
import { LoginRequired } from "@features/auth";
import { PropsWithChildren } from "react";

export function RoomCreatorLayout({ children }: PropsWithChildren) {

    return (
        <LoginRequired>
            {children}
        </LoginRequired>
    );
}
