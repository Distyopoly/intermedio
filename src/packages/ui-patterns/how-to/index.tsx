import { HStack, IconButton } from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";

export function HowTo() {
    return (
        <HStack>
            <IconButton variant="subtle" aria-label="How to" px={2}>How to play<FaQuestion /></IconButton>
        </HStack>
    );
}