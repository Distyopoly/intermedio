export type GameRecipe = {
    /* Blueprint for a game, exported by a game package. */ 
    
    slug: string;
    name?: string;
    description?: string;
    coverArt?: string;
}

export type GameDerivation = {
    /* Concrete game blueprint + metadata used internally. */ 

    slug: string;
    name: string;
    description: string;
    coverArtSrc: string;
}

export function deriveGameRecipe(recipe: GameRecipe): GameDerivation {
    return {
        slug: recipe.slug,
        name: recipe.name ?? recipe.slug,
        description: recipe.description ?? "...",
        coverArtSrc: recipe.coverArt ?? ""
    }
}
