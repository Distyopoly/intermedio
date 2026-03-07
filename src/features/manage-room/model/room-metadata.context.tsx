"use client";

import { createContext } from "react";

import { useImmerReducer } from "use-immer";
import { roomMetadataReducer, RoomAction, RoomMetadataState } from "./room-metadata.reducer";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    roomMetadata: RoomMetadataState;
}>;


export type RoomMetadataContextType = {
    state: RoomMetadataState;
    dispatch: React.Dispatch<RoomAction>;
}

export const RoomMetadataContext = createContext<RoomMetadataContextType | undefined>(undefined)


export function RoomMetadataContextProvider({ children, roomMetadata }: Props) {
    const [state, dispatch] = useImmerReducer(roomMetadataReducer, roomMetadata);

    return (
        <RoomMetadataContext.Provider value={{ state, dispatch }}>
            {children}
        </RoomMetadataContext.Provider>
    );
}
