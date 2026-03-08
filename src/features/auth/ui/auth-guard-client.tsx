
"use client";
import { PropsWithChildren } from "react";
import { Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

type Props = PropsWithChildren<{
    loadingComponent?: React.ReactNode;
}>;

export function AuthenticatedGuardRedirect({ children, loadingComponent }: Props) {
    const session = useSession({ required: true });
    let loading = loadingComponent || <Spinner size="xl" />;

    if (session.status === "loading") {
        return loading;
    }

    return <>{children}</>;
}
