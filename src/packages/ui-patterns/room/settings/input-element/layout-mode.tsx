import { RadioCardLabel, RadioCardRoot, RadioCardItem } from "@/packages/ui-components/radio-card";
import { HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { TbCrosshair } from "react-icons/tb";
import { PiVideoConferenceLight } from "react-icons/pi";
import { ComponentProps } from "react";
import { LayoutMode } from "../settings-provider";
import { RoomSettingsContext } from "../settings-provider";
import { useContext } from "react";

type Props = ComponentProps<typeof RadioCardRoot>;

export default function LayoutModeRadio({ ...props }: Props) {
    const { roomSettings, setRoomSettings } = useContext(RoomSettingsContext);

    return (
        <RadioCardRoot
            value={roomSettings.layoutMode}
            onValueChange={(value) => setRoomSettings({ type: "setLayoutMode", payload: value.value as LayoutMode })}
            orientation="vertical"
            align="center"
            gap={5}
            {...props}
        >
            <RadioCardLabel>Layout Mode</RadioCardLabel>
            <HStack w="fit-content" h="fit-content" minW={{ base: "full", md: 400 }} alignItems="stretch">
                <RadioCardItem key="no-video" value="no-video" label="External Conference"
                    icon={<Icon fontSize="2xl"><TbCrosshair /></Icon>} indicator={null} />
                <RadioCardItem key="video" value="video" label="Split View"
                    icon={<Icon fontSize="2xl"><PiVideoConferenceLight /></Icon>} indicator={null} />
            </HStack>
        </RadioCardRoot>
    );
}