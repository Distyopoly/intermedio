"use client";

import { useContext } from "react";
import { RoomContext } from "../game-derivation/game-derivation-provider";
import { Text, VStack } from "@chakra-ui/react";

export default function GameOverview() {
    const { state } = useContext(RoomContext);
    const gameDerivation = state.gameDerivation;

    return (
        <VStack justifyContent="center" alignItems="center" gap={5} >
            <Text fontSize={{ base: "md", md: "2xl" }}>{gameDerivation.name}</Text>
            <Text fontSize={{ base: "md", md: "2xl" }}>{gameDerivation.description}</Text>

        </VStack>
    );
}
