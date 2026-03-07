import { RadioCardLabel, RadioCardRoot, RadioCardItem } from "@/packages/ui-components/radio-card";
import { HStack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { TbCrosshair } from "react-icons/tb";
import { PiVideoConferenceLight } from "react-icons/pi";
import { ComponentProps } from "react";
import { RoomDraftContext } from "../../model/room-draft.context";
import { RoomBehaviour } from "../../model/RoomBehaviour";
import { useContext } from "react";

type Props = ComponentProps<typeof RadioCardRoot>;

export default function RoomBehaviourRadio({ ...props }: Props) {
    const { roomDraft, setRoomDraft } = useContext(RoomDraftContext);

    return (
        <RadioCardRoot
            value={roomDraft.roomBehaviour}
            onValueChange={(value) => setRoomDraft({ type: "setRoomBehaviour", payload: value.value as RoomBehaviour })}
            orientation="vertical"
            align="center"
            gap={5}
            {...props}
        >
            <RadioCardLabel>Room Behaviour</RadioCardLabel>
            <HStack w="fit-content" h="fit-content" minW={{ base: "full", md: 400 }} alignItems="stretch">
                <RadioCardItem key="no-video" value="no-video" label="External Conference"
                    icon={<Icon fontSize="2xl"><TbCrosshair /></Icon>} indicator={null} />
                <RadioCardItem key="video" value="video" label="Split View"
                    icon={<Icon fontSize="2xl"><PiVideoConferenceLight /></Icon>} indicator={null} />
            </HStack>
        </RadioCardRoot>
    );
}