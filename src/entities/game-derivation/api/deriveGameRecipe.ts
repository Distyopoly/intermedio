import { GameDerivation } from "../model/game-derivation";
import { GameRecipe } from "@/packages/core/contract";

export function deriveGameRecipe(recipe: GameRecipe): GameDerivation {
    return {
        slug: recipe.slug,
        name: recipe.name ?? recipe.slug,
        description: recipe.description ?? "...",
        coverArtSrc: recipe.coverArt ?? "",
        playerCount: recipe.playerCount ?? { min: 2, max: 4 }
    }
}
