import { Button, Flex, HStack, Input, InputGroup, Spacer, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { useRoomInfo } from "../../../model/useRoomInfo";
import { useRoomUrl } from "../../../lib/genRoomUrl";
import { ClipboardButton, ClipboardInput, ClipboardRoot } from "@packages/ui-components/chakra/clipboard";
import { QrCode } from "@packages/ui-components/chakra/qr-code";
import { genInviteText } from "./genInviteText";

export const RoomInviteModalContent = () => {

    const { name } = useRoomInfo()
    const inviteUrl = useRoomUrl(name)
    const inviteMessage = genInviteText({inviteUrl}) 

    return (
        <Stack gap="4">
            <Text textStyle="sm" color="fg.muted">
                Oszd meg az alábbi linket másokkal, hogy csatlakozhassanak a(z) <strong>{name}</strong> szobához.
            </Text>

            <ClipboardRoot value={inviteUrl}>
                <InputGroup endElement={<ClipboardButton variant="ghost" size="xs"/>}>
                    <ClipboardInput variant="flushed"/>
                </InputGroup>
            </ClipboardRoot>


            <Text textStyle="lg" >
                Küldj Meghívót Barátaidnak
            </Text>

            <HStack align="center" flex={1} p="2" >
                <QrCode value={`sms:?body=${inviteMessage}`} size="lg"/>
                <ClipboardRoot flex={1} value={inviteMessage}>
                    <Textarea resize="none" h="9em" variant="outline" value={inviteMessage} disabled />
                    <ClipboardButton variant="ghost" size="xs"/>
                </ClipboardRoot>
            </HStack>
            <Button variant="outline" size="xs" mt="3">
                Meghívó Letöltése
            </Button>
        </Stack>
    )
}
