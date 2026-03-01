import { Editable, IconButton, HStack } from "@chakra-ui/react";
import { LuCheck, LuPencilLine, LuX } from "react-icons/lu";
import { HiOutlineRefresh } from "react-icons/hi";
import { ComponentProps } from "react";

import { Field } from "@packages/ui-components/field";
import { RoomDraftContext } from "../../model/room-draft.context";
import { useContext } from "react";

type Props = ComponentProps<typeof HStack>;

export default function RoomName(props: Props) {
    const { roomDraft, setRoomDraft } = useContext(RoomDraftContext);

    return (
        <Field
            label="Room Name"
        >
            <HStack gap={3} justifyContent="center" w="fit-content" {...props}>
                <IconButton variant="ghost" size="xs" onClick={() => setRoomDraft({ type: "randomName" })}>
                    <HiOutlineRefresh />
                </IconButton>

                <Editable.Root
                    value={roomDraft.roomName}
                    placeholder="Room Name"
                    onValueChange={(details) => setRoomDraft({ type: "setRoomName", payload: details.value })}
                    onValueRevert={(details) => setRoomDraft({ type: "setRoomName", payload: details.value })}
                >
                    <Editable.Preview fontSize="lg" fontWeight="bold" />
                    <Editable.Input fontSize="lg" fontWeight="bold" />
                    <Editable.Control>
                        <Editable.EditTrigger asChild>
                            <IconButton variant="ghost" size="xs">
                                <LuPencilLine />
                            </IconButton>
                        </Editable.EditTrigger>
                        <Editable.CancelTrigger asChild>
                            <IconButton variant="outline" size="xs">
                                <LuX />
                            </IconButton>
                        </Editable.CancelTrigger>
                        <Editable.SubmitTrigger asChild>
                            <IconButton variant="outline" size="xs">
                                <LuCheck />
                            </IconButton>
                        </Editable.SubmitTrigger>
                    </Editable.Control>
                </Editable.Root>
                {/* <Text fontSize="lg" fontWeight="subtle">Room</Text> */}
            </HStack>
        </Field>
    );
}