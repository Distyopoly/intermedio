import { ComponentProps } from "react";
import { ToggleTip } from "@packages/ui-components/chakra/toggle-tip";
import { FaChevronDown } from "react-icons/fa";
import { MainRow } from "./MainRow";
import { SecondaryRow } from "./SecondaryRow";
import { VStack } from "@chakra-ui/react";

type Props = ComponentProps<typeof VStack>;

export function ControlPanel(props: Props) {
    return (
        <VStack {...props} layerStyle="fill.solid" wrap="nowrap">
            <MainRow
                justifyContent="center" w="full"
                secondRowToggle={
                    <ToggleTip portalled showArrow content={
                        // TODO: make this a modal
                        <SecondaryRow justifyContent="center" w="full" layerStyle="fill.solid"/>
                    }>
                        <FaChevronDown />
                    </ToggleTip>
                } />


            {/* {isGameMaster && <Button onClick={() => restartMatch()}>Restart Match</Button>} */}
        </VStack>
    );
}
