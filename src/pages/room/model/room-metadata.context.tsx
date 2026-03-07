"use client";

import { createContext } from "react";
import { GameDerivation } from "@entities/game-derivation";
import { gameDerivations } from "@/games/game-list";
import { useImmerReducer } from "use-immer";
import { roomMetadataReducer, RoomAction, RoomMetadataState } from "./room-metadata.reducer";


export type RoomMetadataContextType = {
    state: RoomMetadataState;
    dispatch: React.Dispatch<RoomAction>;
}

// const defaultGameDerivationSlug = gameDerivations[0].slug;
// FIXME: refactor into .context and .reducer
export const defaultGameDerivationSlug = "xo";

const defaultGameDerivation: GameDerivation = gameDerivations[defaultGameDerivationSlug];

export const RoomMetadataContext = createContext<RoomMetadataContextType | undefined>(undefined)

const defaultRoomMetadata: RoomMetadataState = {
    roomName: "",
    roomBehaviour: "video",
    gameDerivation: defaultGameDerivation
}

export function RoomMetadataContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useImmerReducer(roomMetadataReducer, defaultRoomMetadata);

    return (
        <RoomMetadataContext.Provider value={{ state, dispatch }}>
            {children}
        </RoomMetadataContext.Provider>
    );
}
