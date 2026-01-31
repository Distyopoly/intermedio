import { HStack, Button } from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Button> & {};

export function HowTo({ ...props }: Props) {
    return (
        <Button size="lg" variant="subtle" aria-label="How to" px={2} {...props}>How to play<FaQuestion /></Button>
    );
}