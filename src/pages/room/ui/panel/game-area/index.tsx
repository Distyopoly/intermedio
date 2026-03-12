import { VStack, Text, Button } from "@chakra-ui/react";
import GameOverview from "./game-switcher/GameOverview";
import { GameSwitcher } from "./game-switcher/GameArea";

export function GameArea() {

    return (
        <VStack
            h="100%" justifyContent="center" alignItems="center" gap={10}
            // layerStyle="fill.surface"
            w="full">
            <Text fontSize="sm">Choose A Game</Text>
            <GameOverview />
            <GameSwitcher />
            <Button>Start</Button>
        </VStack>
    );
}
