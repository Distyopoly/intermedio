import { PropsWithChildren } from "react";
import { AuthenticatedGuardRedirect } from "./auth-guard-client";

type Props = PropsWithChildren<{
    message?: string;
}>;

export async function LoginRequired({ children }: Props) {
    return <AuthenticatedGuardRedirect>{children}</AuthenticatedGuardRedirect>
}
