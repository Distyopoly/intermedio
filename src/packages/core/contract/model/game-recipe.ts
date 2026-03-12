export type GameRecipe = {
    /* Blueprint for a game, exported by a game package. */ 
    
    slug: string;
    name?: string;
    description?: string;
    coverArt?: string;
    playerCount?: {
        min: number;
        max: number;
    }
}
