import { LinkButton } from "@/packages/ui-components/link-button";
import { AbsoluteCenter, Text, VStack } from "@chakra-ui/react";

export default function StandalonePage() {
    return (
        <AbsoluteCenter>
            <VStack gap="20">
                <Text fontSize="2xl">This layout is supposed to be used for game development.</Text>
                <VStack>
                    <LinkButton href="/standalone/xo" variant="solid">XO </LinkButton>
                    <LinkButton href="/standalone/nous" variant="solid">Nous </LinkButton>
                </VStack>
            </VStack>
        </AbsoluteCenter>
    );
}
