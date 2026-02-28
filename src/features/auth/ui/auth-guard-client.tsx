
"use client";
import { PropsWithChildren } from "react";
import { Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

type Props = PropsWithChildren<{
    loadingComponent?: React.ReactNode;
    notAuthenticatedComponent?: React.ReactNode;
}>;

export function AuthenticatedGuardClient({ children, loadingComponent, notAuthenticatedComponent }: Props) {
    const session = useSession();
    let loading = loadingComponent || <Spinner size="xl" />;

    if (session.status === "loading") {
        return loading;
    }

    if (!session.data?.user) {
        return notAuthenticatedComponent || null;
    };

    return <>{children}</>;
}
