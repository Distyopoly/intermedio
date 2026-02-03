import { Editable, IconButton, HStack, Text } from "@chakra-ui/react";
import { LuCheck, LuPencilLine, LuX } from "react-icons/lu";
import { HiOutlineRefresh } from "react-icons/hi";
import { ComponentProps } from "react";


type Props = ComponentProps<typeof HStack>; 

export default function RoomName({ ...props }: Props) {
    return (
        <HStack gap={3} justifyContent="center" w="fit-content" {...props}>
        <IconButton variant="ghost" size="xs">
            <HiOutlineRefresh />
        </IconButton>
        <Editable.Root defaultValue="Room Name">
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
    );
}