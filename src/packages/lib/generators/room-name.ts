import { adjectives, uniqueNamesGenerator, Config } from "unique-names-generator";
import { boardgames } from "@/packages/lib/random/dictionaries/boardgames";

export function randomRoomName() {

    const config = {
        dictionaries: [adjectives, boardgames],
        separator: ' ',
        style: "capital",
        length: 2,
    } satisfies Config;

    return uniqueNamesGenerator(config);
}