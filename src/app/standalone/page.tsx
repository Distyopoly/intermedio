import { LinkButton } from "@/packages/ui-components/link-button";
import { AbsoluteCenter, Text, VStack } from "@chakra-ui/react";

export default function StandaloneLayout() {
    return (
        <AbsoluteCenter>
            <VStack gap="20">
                <Text fontSize="2xl">This layout is supposed to be used for game development.</Text>
                <VStack>
                    <LinkButton href="/standalone/xo" variant="outline">XO </LinkButton>
                </VStack>
            </VStack>
        </AbsoluteCenter>
    );
}