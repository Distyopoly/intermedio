import { gameDerivations } from "@/games/game-list";

export type GameDerivation = {
    /* Concrete game blueprint + metadata used internally. */ 

    slug: string;
    name: string;
    description: string;
    coverArtSrc: string;
    playerCount: {
        min: number;
        max: number;
    }
}


// ==========CRUD==============

const defaultGameDerivationSlug = "xo";

export function listGameDerivations(): GameDerivation[] {
    return Object.values(gameDerivations);
}

export function getGameDerivation(slug: string): GameDerivation {
    return gameDerivations[slug];
}

export function getDefaultGameDerivation(): GameDerivation {
    return gameDerivations[defaultGameDerivationSlug];
}
