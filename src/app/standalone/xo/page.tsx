import { AbsoluteCenter, Bleed, Button, Heading, VStack } from "@chakra-ui/react";
import { SettingsDialog } from "./settings-dialog";

export default function RoomSelectionPage() {
    return (
        <AbsoluteCenter>
            <Bleed block="10">
                <VStack layerStyle="fill.muted" height="fit-content" gap={10} borderRadius={10} padding={10}>
                    <Heading fontSize="6xl" my={10}>XO</Heading>
                    <SettingsDialog/>
                    <Button size="lg">Create Room</Button>
                </VStack>
            </Bleed>
        </AbsoluteCenter>
    );
}