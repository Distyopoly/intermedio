import { RoomBehaviour } from "./RoomBehaviour";
import { randomRoomName } from "@shared/lib/generators";


export type RoomDraftState = {
    roomName: string;
    layoutMode: RoomBehaviour;
}

export type RoomDraftAction =
    | { type: "randomName" }
    | { type: "setRoomName"; payload: string }
    | { type: "setLayoutMode"; payload: RoomBehaviour };

export function roomDraftReducer(draft: RoomDraftState, action: RoomDraftAction) {
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
