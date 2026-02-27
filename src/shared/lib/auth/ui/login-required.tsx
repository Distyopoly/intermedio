import { Alert } from "@/packages/ui-components/alert";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import LoginButton from "./login-button";
import AuthenticatedGuardServer from "./auth-guard-server";

type Props = PropsWithChildren<{
    message?: string;
}>;

function LoginRequiredComponent({ message }: { message?: string }) {
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
                        {message || "You must be logged in to access this feature."}
                    </Text>
                    <LoginButton />
                </VStack>
            </Alert>
        </Flex>
    );
}

export default async function LoginRequired({ children, message }: Props) {
    return <AuthenticatedGuardServer notAuthenticatedComponent={<LoginRequiredComponent message={message} />}>{children}</AuthenticatedGuardServer>
}
