"use client";

import { randomRoomName } from "@/shared/lib/generators";
import { Dispatch, PropsWithChildren } from "react";
import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { defaultRoomSettingsState, RoomSettingsAction, roomSettingsReducer, RoomSettingsState } from "./room-settings.reducer";



export type RoomSettingsContextType = {
    roomSettings: RoomSettingsState;
    setRoomSettings: Dispatch<RoomSettingsAction>;
}

const defaultRoomSettingsContext: RoomSettingsContextType = {
    roomSettings: defaultRoomSettingsState,
    setRoomSettings: () => { },
}

export const RoomSettingsContext = createContext<RoomSettingsContextType>(defaultRoomSettingsContext);


export function RoomSettingsProvider({ children }: PropsWithChildren
) {
    const [roomSettings, setRoomSettings] = useImmerReducer(roomSettingsReducer, defaultRoomSettingsContext.roomSettings);

    return (
        <RoomSettingsContext.Provider value={{ roomSettings, setRoomSettings }}>
            {children}
        </RoomSettingsContext.Provider>
    );
}
