"use client";
import { HStack, For } from "@chakra-ui/react";
import { ComponentProps, useContext } from "react";
import { RoomContext } from "../game-derivation/game-derivation-provider";
import { gameDerivations } from "@/games/game-list";
import { RadioCardRoot, RadioCardItem } from "@/packages/ui-components/radio-card";

export function GameSwitcher({ ...props }: ComponentProps<typeof RadioCardRoot>) {
    const { state, dispatch } = useContext(RoomContext);

    return (
        <RadioCardRoot
            value={state.gameDerivation.slug}
            onValueChange={(value) => dispatch({ type: "setGameDerivation", payload: value.value })}
            {...props}
        >
            <HStack w="fit-content" gap={5}
            >
                <For each={Object.values(gameDerivations)}>
                    {(derivation) => (
                        <RadioCardItem
                            key={derivation.slug}
                            value={derivation.slug}
                            label={derivation.name}
                            indicator={null} />
                    )}
                </For>
            </HStack>
        </RadioCardRoot>  
    );
}
    