import { Box } from "@chakra-ui/react";
import RoomName from "./room-name";
import LayoutModeRadio from "./room-behaviour-radio";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Box>;

export default function InputContainer({ ...props }: Props) {
    return (
        <Box {...props}>
            <RoomName mb={10} mt={3} ml={3} />
            <LayoutModeRadio />
        </Box>
    );
}