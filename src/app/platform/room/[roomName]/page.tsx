import { Box, Center, VStack, Text, Button } from "@chakra-ui/react";
import { GameSwitcher } from "@/packages/ui-patterns/room/game-switcher";
import GameOverview from "@/packages/ui-patterns/room/game-switcher/game-overview";

export default function Page() {

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
