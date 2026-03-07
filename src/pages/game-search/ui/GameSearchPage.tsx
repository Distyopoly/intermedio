import { Box } from "@chakra-ui/react";
import { listGameDerivations } from "@entities/game-derivation";

export function GameSearchPage() {
    return (
        <Box>
            GameSearchPage
            {listGameDerivations().map((gameDerivation) => (
                <Box key={gameDerivation.slug}>
                    {gameDerivation.name}
                </Box>
            ))}
        </Box>
    );
}