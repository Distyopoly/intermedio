"use client";

import { createContext } from "react";
import { GameDerivation } from "./game-derivation";
import { gameDerivations } from "@/games/game-list";
import { useImmerReducer } from "use-immer";

export type RoomAction = {
    type: "setGameDerivation";
    payload: string | null;
}

export type RoomState = {
    gameDerivation: GameDerivation;
}

export type RoomContextType = {
    state: RoomState;
    dispatch: React.Dispatch<RoomAction>;
}

// const defaultGameDerivationSlug = gameDerivations[0].slug;
const defaultGameDerivationSlug = "xo";

const defaultGameDerivation: GameDerivation = gameDerivations[defaultGameDerivationSlug];

export const RoomContext = createContext<RoomContextType>({
    state: { gameDerivation: defaultGameDerivation },
    dispatch: () => { },
})

function reducer(draft: RoomState, action: RoomAction) {
    switch (action.type) {
        case "setGameDerivation":
            draft.gameDerivation = gameDerivations[action.payload ?? defaultGameDerivationSlug];
            return;
    }
}

export function RoomProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useImmerReducer(reducer, { gameDerivation: defaultGameDerivation });

    return (
        <RoomContext.Provider value={{ state, dispatch }}>
            {children}
        </RoomContext.Provider>
    );
}
