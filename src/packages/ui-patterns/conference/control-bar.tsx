import { Flex } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Flex>;

export function ControlBar(props: Props) {
    return (
        <Flex {...props}>
            ControlBar
        </Flex>
    );
}