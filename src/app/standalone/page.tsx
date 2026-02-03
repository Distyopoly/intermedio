import { Alert } from "@/packages/ui-components/alert";
import { LinkButton } from "@/packages/ui-components/link-button";
import { AbsoluteCenter, Text, VStack } from "@chakra-ui/react";

export default function StandalonePage() {
    return (
        <AbsoluteCenter>
            <VStack gap={10}>
                <Alert
                    title="Developer Notice"
                    status="info"
                    maxW="md"
                    borderRadius="xl"
                    lineHeight="tall"
                    variant="outline"
                >

                    <Text fontSize={{ base: "md", md: "2xl" }}>The standalone mode is supposed to be used for game development only.</Text>
                </Alert>
                <VStack>
                    <LinkButton href="/standalone/xo" variant="solid">XO </LinkButton>
                    <LinkButton href="/standalone/nous" variant="solid">Nous </LinkButton>
                </VStack>
            </VStack>
        </AbsoluteCenter>
    );
}
