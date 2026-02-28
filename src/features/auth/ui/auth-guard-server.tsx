
import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../config/auth-options";

type Props = PropsWithChildren<{ 
    notAuthenticatedComponent?: React.ReactNode;
}>;

export async function AuthenticatedGuardServer({ children, notAuthenticatedComponent }: Props) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return notAuthenticatedComponent || null;
    }

    return <>{children}</>;
}
