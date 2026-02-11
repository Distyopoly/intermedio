
import LoginRequired from "@/packages/ui-patterns/auth/login-required";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    
    return (
        <LoginRequired>
            {children}
        </LoginRequired>
    );
}
