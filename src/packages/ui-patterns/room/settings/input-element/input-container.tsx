import { Box } from "@chakra-ui/react";
import RoomName from "./room-name";
import LayoutModeRadio from "./layout-mode";
import { LayoutMode, RoomSettingsContext } from "../settings-provider";
import { ComponentProps, useContext } from "react";

type Props = ComponentProps<typeof Box>;

export default function InputContainer({ ...props }: Props) {
    return (
        <Box {...props}>
            <RoomName mb={10} mt={3} ml={3} />
            <LayoutModeRadio />
        </Box>
    );
}