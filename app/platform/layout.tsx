
import LoginRequired from "@/shared/lib/auth/ui/login-required";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {

    return (
        <LoginRequired>
            {children}
        </LoginRequired>
    );
}
