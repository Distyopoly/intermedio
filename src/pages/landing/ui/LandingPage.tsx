import { VStack, Heading, Text, ButtonGroup, HStack } from "@chakra-ui/react";
import { LinkButton } from "@packages/ui-components/link-button";

export function LandingPage() {
    return (
        <VStack layerStyle="fill.muted" h="full" gap={8} p={4}>
            <Heading size="5xl" fontWeight="black" letterSpacing="tight">Welcome to Distyopoly</Heading>
        
            <Text fontSize="xl" color="fg.muted" maxW="md">
                Distyopoly is a place for you and your friends. 

            </Text>
            <HStack gap={10} mt={22}>
              <LinkButton size="xl" href="/tutorial" variant="solid">Start Here</LinkButton>
              <LinkButton size="xl" href="/create-room" variant="outline">Create room</LinkButton>
            </HStack>
        </VStack>
    );
}
