"use client";

import { gameDerivations } from "@/games/game-list";
import { Alert } from "@/packages/ui-components/alert";
import { RadioCardItem, RadioCardLabel, RadioCardRoot } from "@/packages/ui-components/radio-card";
import { MainAreaBackground } from "@/packages/ui-patterns/background";
import CreateRoomButton from "@/packages/ui-patterns/room/create-room-button";
import { GameDerivationContext } from "@/packages/ui-patterns/room/game-derivation-provider";
import { Button, For, HStack } from "@chakra-ui/react";
import { AbsoluteCenter, ButtonGroup, Text, VStack } from "@chakra-ui/react";
import { useCallback, useContext } from "react";

export default function StandalonePage() {
    const { gameDerivation, setGameDerivation } = useContext(GameDerivationContext);


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
                    <VStack gap={6}>
                        <RadioCardRoot
                            defaultValue="no-video"
                            orientation="vertical"
                            align="center"
                            gap={5}
                            variant="solid"
                            layerStyle="fill.surface"
                            p={5}
                            borderRadius="xl"
                        >
                            <HStack w="fit-content" gap={5}
                            >
                                <For each={Object.values(gameDerivations)}>
                                    {(derivation) => (
                                        <RadioCardItem onClick={useCallback(() => setGameDerivation(derivation.slug), [])}
                                        key={derivation.slug} value={derivation.slug} label={derivation.name}
                                            indicator={null} />
                                    )}
                                </For>
                            </HStack>
                        </RadioCardRoot>
                        <CreateRoomButton/>
                    </VStack>
                </VStack>
            </AbsoluteCenter>
            <MainAreaBackground key={gameDerivation.coverArtSrc} src={gameDerivation.coverArtSrc} />
        </>
    );
}
