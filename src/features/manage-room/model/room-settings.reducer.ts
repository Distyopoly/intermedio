import { RoomBehaviour } from "@entities/room/model/RoomBehaviour";
import { randomRoomName } from "@shared/lib/generators";
import { CreateOrUpdateRoomDto } from "@entities/room";


export type RoomSettingsState = {
    room: CreateOrUpdateRoomDto;
}

export const defaultRoomSettingsState: RoomSettingsState = {
    room: {
        name: randomRoomName(),
        roomBehaviour: "no-video",
    } satisfies CreateOrUpdateRoomDto,
};

export type RoomSettingsAction =
    | { type: "randomName" }
    | { type: "setRoomName"; payload: string }
    | { type: "setRoomBehaviour"; payload: RoomBehaviour };

export function roomSettingsReducer(draft: RoomSettingsState, action: RoomSettingsAction) {
    switch (action.type) {
        case "randomName":
            draft.room.name = randomRoomName();
            return;
        case "setRoomName":
            draft.room.name = action.payload;
            return;
        case "setRoomBehaviour":
            draft.room.roomBehaviour = action.payload;
            return;
    }
}
