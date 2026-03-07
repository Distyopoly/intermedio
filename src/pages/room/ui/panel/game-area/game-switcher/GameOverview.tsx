"use client";

import { useContext } from "react";
import { RoomMetadataContext } from "@features/manage-room";
import { Text, VStack } from "@chakra-ui/react";

export default function GameOverview() {
    const context = useContext(RoomMetadataContext);
    if (!context) {
        return null;
    }

    const { state } = context;

    const gameDerivation = state.gameDerivation;

    return (
        <VStack justifyContent="center" alignItems="center" gap={5} >
            <Text fontSize={{ base: "md", md: "2xl" }}>{gameDerivation.name}</Text>
            <Text fontSize={{ base: "md", md: "2xl" }}>{gameDerivation.description}</Text>

        </VStack>
    );
}
