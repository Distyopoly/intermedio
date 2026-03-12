"use client";

import { useContext } from "react";
import { RoomMetadataContext } from "@features/manage-room";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { BgImage } from "@packages/ui-patterns/background";

export default function GameOverview() {
    const context = useContext(RoomMetadataContext);
    if (!context) {
        return null;
    }

    const { state } = context;

    const gameDerivation = state.gameDerivation;

    return (
        <VStack justifyContent="center" alignItems="center" gap={5} 
        p={5}
        layerStyle="fill.surface"
        >
            <Heading fontSize={{ base: "md", md: "2xl" }}>{gameDerivation.name}</Heading>
            <VStack layerStyle="fill.surface" p={5}>
                <Text fontSize={{ base: "md", md: "2xl" }}>{gameDerivation.description}</Text>
            </VStack>

            <BgImage key={gameDerivation.coverArtSrc} src={gameDerivation.coverArtSrc} />
        </VStack>
    );
}
