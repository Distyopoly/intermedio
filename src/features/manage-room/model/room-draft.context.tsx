"use client";

import { randomRoomName } from "@/shared/lib/generators";
import { Dispatch, PropsWithChildren } from "react";
import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { RoomDraftAction, roomDraftReducer, RoomDraftState } from "./room-draft.reducer";



export type RoomDraftContextType = {
    roomDraft: RoomDraftState;
    setRoomDraft: Dispatch<RoomDraftAction>;
}

const defaultRoomDraftContext: RoomDraftContextType = {
    roomDraft: {
        roomName: randomRoomName(),
        roomBehaviour: "no-video",
    },
    setRoomDraft: () => { },
}

export const RoomDraftContext = createContext<RoomDraftContextType>(defaultRoomDraftContext);


export function RoomDraftProvider({ children }: PropsWithChildren
) {
    const [roomDraft, setRoomDraft] = useImmerReducer(roomDraftReducer, defaultRoomDraftContext.roomDraft);

    return (
        <RoomDraftContext.Provider value={{ roomDraft, setRoomDraft }}>
            {children}
        </RoomDraftContext.Provider>
    );
}
