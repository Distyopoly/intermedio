import { VStack, Text, Button } from "@chakra-ui/react";
import GameOverview from "./game-switcher/game-overview";
import { GameSwitcher } from "./game-switcher";

export function GameArea() {

    return (
        <VStack layerStyle="fill.surface" h="100%" justifyContent="center" alignItems="center" gap={10}
            w="full">
            <Text fontSize="sm">Choose A Game</Text>
            <GameOverview />
            <GameSwitcher />
            <Button>Start</Button>
        </VStack>
    );
}
 