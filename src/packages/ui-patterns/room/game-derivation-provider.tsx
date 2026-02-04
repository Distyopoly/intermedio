"use client";

import { createContext, useState } from "react";
import { GameDerivation } from "./game-derivation";
import { gameDerivations } from "@/games/game-list";

export type GameDerivationContextType = {
    gameDerivation: GameDerivation;
    setGameDerivation: (slug: string) => void;
    previewDerivation: GameDerivation | undefined;
    setPreviewDerivation: (slug: string) => void;
}

const defaultGameDerivation = Object.values(gameDerivations)[0];

export const GameDerivationContext = createContext<GameDerivationContextType>({
    gameDerivation: defaultGameDerivation,
    setGameDerivation: () => { },
    previewDerivation: undefined,
    setPreviewDerivation: () => { }
})

export function GameDerivationProvider({ children }: { children: React.ReactNode }) {
    const [gameDerivation, setGameDerivationState] = useState(defaultGameDerivation);
    const [previewDerivation, setPreviewDerivationState] = useState<GameDerivation | undefined>(defaultGameDerivation);

    const setGameDerivation = (slug: string) => {
        const derivation = gameDerivations[slug];
        if (derivation) {
            setGameDerivationState(derivation);
        }
    }

    const setPreviewDerivation = (slug: string) => {
        const derivation = gameDerivations[slug];
        if (derivation) {
            setPreviewDerivationState(derivation);
        }
    }

    return (
        <GameDerivationContext.Provider value={{ gameDerivation, setGameDerivation, previewDerivation, setPreviewDerivation }}>
            {children}
        </GameDerivationContext.Provider>
    );
}
