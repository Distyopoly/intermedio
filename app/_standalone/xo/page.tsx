import { AbsoluteCenter, Bleed, Button, Heading, VStack } from "@chakra-ui/react";
import { SettingsDialog } from "../../../src/features/manage-room/ui/settings-dialog";
import CreateRoomButton from "@/pages/room/create-room-button";
import { RoomSettingsProvider } from "@features/manage-room/model/room-draft.context";

export default function RoomSelectionPage() {


    return (
        <AbsoluteCenter>
            <Bleed block="10">
                <RoomSettingsProvider>
                    <VStack layerStyle="fill.muted" height="fit-content" gap={10} borderRadius={10} padding={10}>
                        <Heading fontSize="6xl" my={10}>XO</Heading>
                        <SettingsDialog />
                        <CreateRoomButton roomPrefix="/standalone/xo/room" />
                    </VStack>
                </RoomSettingsProvider>
            </Bleed>
        </AbsoluteCenter>
    );
}