import { RadioCardLabel, RadioCardRoot, RadioCardItem } from "@/packages/ui-components/radio-card";
import { HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { TbCrosshair } from "react-icons/tb";
import { PiVideoConferenceLight } from "react-icons/pi";


export default function LayoutMode() {
    return (
        <RadioCardRoot
            defaultValue="no-video"
            orientation="vertical"
            align="center"
            gap={5}
        >
            <RadioCardLabel>Layout Mode</RadioCardLabel>
            <HStack w="fit-content" minW={400}>
                <RadioCardItem key="no-video" value="no-video" label="External Conference"
                    icon={<Icon fontSize="2xl"><TbCrosshair /></Icon>} indicator={null} />
                <RadioCardItem key="video" value="video" label="Split View"
                    icon={<Icon fontSize="2xl"><PiVideoConferenceLight /></Icon>} indicator={null} />
            </HStack>
        </RadioCardRoot>
    );
}