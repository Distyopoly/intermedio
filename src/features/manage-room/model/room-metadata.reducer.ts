import { gameDerivations } from "@/games/game-list";
import { GameDerivation } from "@entities/game-derivation";
import { RoomBehaviour } from "@features/manage-room";
import { getDefaultGameDerivation } from "@entities/game-derivation";


export type RoomMetadataState = {
    roomName: string;
    roomBehaviour: RoomBehaviour;
    gameDerivation: GameDerivation;
};

export type RoomAction = {
    type: "setGameDerivation";
    payload: string | null;
};

export function roomMetadataReducer(draft: RoomMetadataState, action: RoomAction) {
    switch (action.type) {
        case "setGameDerivation":
            draft.gameDerivation = gameDerivations[action.payload ?? getDefaultGameDerivation().slug];
            return;
    }
}

