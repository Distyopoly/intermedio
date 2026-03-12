"use client";

import { useContext } from "react";
import { RoomMetadataContext } from "@features/manage-room";
import { Heading, Text, VStack, Box } from "@chakra-ui/react";
import { BgImage } from "@packages/ui-patterns/background";
import NextImage from "next/image";


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

            {/* <Box zIndex={-1} position="relative" w="full" h="96vh" overflow="hidden" >
                <NextImage key={gameDerivation.coverArtSrc} src={gameDerivation.coverArtSrc} alt="Game Art Cover" fill />
            </Box> */}
        </VStack>
    );
}
