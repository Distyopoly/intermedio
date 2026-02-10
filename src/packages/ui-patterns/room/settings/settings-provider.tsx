"use client";

import { randomRoomName } from "@/packages/lib/generators/room-name";
import { Dispatch, PropsWithChildren } from "react";
import { createContext } from "react";
import { useImmerReducer } from "use-immer";


export type LayoutMode = "no-video" | "video" | null;

export type RoomSettings = {
    roomName: string;
    layoutMode: LayoutMode;
}

type SettingsAction =
    | { type: "randomName" }
    | { type: "setRoomName"; payload: string }
    | { type: "setLayoutMode"; payload: LayoutMode };
    
function settingsReducer(draft: RoomSettings, action: SettingsAction) {
    switch (action.type) {
        case "randomName":
            draft.roomName = randomRoomName();
            return;
        case "setRoomName":
            draft.roomName = action.payload;
            return;
        case "setLayoutMode":
            draft.layoutMode = action.payload;
            return;
    }
}

export type RoomSettingsContextType = {
    roomSettings: RoomSettings;
    setRoomSettings: Dispatch<SettingsAction>;
}

const defaultRoomSettingsContext: RoomSettingsContextType = {
    roomSettings: {
        roomName: randomRoomName(),
        layoutMode: "no-video",
    },
    setRoomSettings: () => { },
}

export const RoomSettingsContext = createContext<RoomSettingsContextType>(defaultRoomSettingsContext);


export function RoomSettingsProvider({ children }: PropsWithChildren
) {
    const [roomSettings, setRoomSettings] = useImmerReducer(settingsReducer, defaultRoomSettingsContext.roomSettings);

    return (
        <RoomSettingsContext.Provider value={{ roomSettings, setRoomSettings }}>
            {children}
        </RoomSettingsContext.Provider>
    );
}
