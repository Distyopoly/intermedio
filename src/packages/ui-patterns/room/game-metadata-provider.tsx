"use client";

import { createContext, useState } from "react";

export type GameMetadata = {
    gameBackground: string;
    setGameBackground: React.Dispatch<React.SetStateAction<string>>;
}

export const GameMetadataContext = createContext<GameMetadata>({gameBackground: "", setGameBackground: () => {}})

export function GameMetadataProvider({ children }: { children: React.ReactNode }) {
    const [gameBackground, setGameBackground] = useState("");

    return (
        <GameMetadataContext.Provider value={{ gameBackground, setGameBackground }}>
            {children}
        </GameMetadataContext.Provider>
    );
}
