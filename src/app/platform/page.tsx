import { Highlight, Heading, VStack } from "@chakra-ui/react";
import { RoomSettingsProvider } from "@/packages/ui-patterns/room/settings/settings-provider";
import { SettingsDialog } from "@/packages/ui-patterns/room/settings";
import { AbsoluteCenter } from "@chakra-ui/react";
import CreateRoomButton from "@/packages/ui-patterns/room/create-room-button";

export default function Home() {
  return (
    <AbsoluteCenter>
      <VStack gap="5em">
        <Heading userSelect="none" fontSize="6xl" letterSpacing="wide" fontWeight="bold" textAlign="center" lineHeight="shorter" textWrap="balance">
          <Highlight query="gamenight" styles={{ color: "red.600" }}>
            Start your gamenight
          </Highlight>
        </Heading>
        <VStack
          // bg="blackAlpha.600"
          // backdropFilter="blur(8px)"
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
            <CreateRoomButton roomPrefix="/platform/room"/>
          </RoomSettingsProvider>
        </VStack>
      </VStack>
    </AbsoluteCenter>
  );
}
