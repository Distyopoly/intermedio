"use client";

import { Alert } from "@/packages/ui-components/alert";
import { LinkButton } from "@/packages/ui-components/link-button";
import { MainAreaBackground } from "@/packages/ui-patterns/background";
import { GameMetadataContext } from "@/packages/ui-patterns/room/game-metadata-provider";
import { AbsoluteCenter, Text, VStack } from "@chakra-ui/react";
import { useCallback, useContext } from "react";

export default function StandalonePage() {
    const { gameBackground, setGameBackground } = useContext(GameMetadataContext);


    return (
        <>
        <AbsoluteCenter>
            <VStack gap={10}>
                <Alert
                    title="Developer Notice"
                    status="info"
                    maxW="md"
                    borderRadius="xl"
                    lineHeight="tall"
                    variant="surface"
                >

                    <Text fontSize={{ base: "md", md: "2xl" }}>The standalone mode is supposed to be used for game development only.</Text>
                </Alert>
                <VStack>
                    <LinkButton href="/standalone/xo" variant="solid" onMouseEnter={useCallback(() => setGameBackground("/xo-background.png"), [])}>XO </LinkButton>
                    <LinkButton href="/standalone/nous" variant="solid" onMouseEnter={useCallback(() => setGameBackground("/nous-background.png"), [])}>Nous </LinkButton>
                </VStack>
            </VStack>
        </AbsoluteCenter>
        <MainAreaBackground key={gameBackground} src={gameBackground}/>
        </>
    );
}
