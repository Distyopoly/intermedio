import { GameDerivation } from "@entities/game-derivation";
import nous from "./nous";
import xo from "./xo";
import maffia from "./maffia";

export const gameDerivations: Record<string, GameDerivation> = {
    nous,
    xo,
    maffia
}
