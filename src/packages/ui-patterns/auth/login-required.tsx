import { Alert } from "@/packages/ui-components/alert";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import LoginButton from "./login-button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/packages/ui-patterns/auth/next-auth/auth-options";

type Props = PropsWithChildren;

export default async function LoginRequired({ children }: Props) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <Flex
                w="full"
                h="full"
                alignItems="center"
                justifyContent="center"
                p={4}
                mt="20vh"
            >
                <Alert
                    title="Unauthorized"
                    status="error"
                    maxW="md"
                    shadow="xl"
                    borderRadius="xl"
                    lineHeight="tall"
                    variant="surface"
                >
                    <VStack gap={6} py={2}>
                        <Text textAlign="center" fontSize="lg">
                            You must be logged in to access this feature.
                        </Text>
                        <LoginButton />
                    </VStack>
                </Alert>
            </Flex>
        )
    };

    return <>{children}</>;
}