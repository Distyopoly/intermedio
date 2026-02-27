"use client";

import { ClientOnly, Portal, Tabs, useBreakpointValue } from "@chakra-ui/react";
import UsingCards from "./tab/using-cards";

export default function HowToTabs() {
    const orientation = useBreakpointValue({ base: "horizontal", md: "vertical" }) satisfies "vertical" | "horizontal" | undefined;

    return (
        <ClientOnly>
            <Tabs.Root
                orientation={orientation}
                defaultValue="cards"
                h="full"
                w="full"
            >
                <Tabs.List>
                    <Tabs.Trigger value="room">Creating Room</Tabs.Trigger>
                    <Tabs.Trigger value="cards">Using Cards</Tabs.Trigger>
                    <Tabs.Trigger value="boards">Using Boards</Tabs.Trigger>
                    <Tabs.Trigger value="rules">Rules</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="room">
                    Placeholder
                </Tabs.Content>
                <Tabs.Content value="cards" w="full" flex="1">
                    <UsingCards />
                </Tabs.Content>
                <Tabs.Content value="boards">
                    Placeholder
                </Tabs.Content>
                <Tabs.Content value="rules">
                    Placeholder
                </Tabs.Content>
            </Tabs.Root>
        </ClientOnly>
    );
}
