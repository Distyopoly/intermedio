import { AbsoluteCenter, Heading, VStack, Highlight } from "@chakra-ui/react";
import { Playbook } from "@features/playbook";
import { CreateRoomButton, RoomSettingsProvider, SettingsDialog } from "@features/manage-room";

export function RoomCreatorPage() {
    return (

        <AbsoluteCenter>
            <VStack gap="5em">
                <Heading userSelect="none" fontSize="6xl" letterSpacing="wide" fontWeight="bold" textAlign="center" lineHeight="shorter" textWrap="balance">
                    <Highlight query="gamenight" styles={{ color: "red.600" }}>
                        Start your gamenight
                    </Highlight>
                </Heading>
                <VStack
                    borderRadius="lg"
                    layerStyle="fill.subtle"
                    opacity={0.9}
                    h="fit-content"
                    gap={10}
                    w="fit-content"
                    padding={10}
                >
                    <RoomSettingsProvider>
                        <SettingsDialog variant="ghost" size="2xl" />
                        <CreateRoomButton />
                        <Playbook variant="surface" />
                    </RoomSettingsProvider>
                </VStack>
            </VStack>
        </AbsoluteCenter>
    );
}