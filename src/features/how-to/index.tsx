import { Box, Button, Text } from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";
import { ComponentProps } from "react";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTrigger } from "@/packages/ui-components/dialog";
import HowToTabs from "./tabs";

type Props = ComponentProps<typeof Button> & {};

export function HowTo({ ...props }: Props) {

    return (
        <DialogRoot size={{ mdDown: "full", md: "lg" }}>
            <DialogTrigger asChild>
                <Button size="lg" variant="subtle" aria-label="How to" px={2} {...props}>How to play<FaQuestion /></Button>
            </DialogTrigger>
            <DialogContent h="50vh">
                <DialogCloseTrigger/>
                <DialogHeader letterSpacing="wide" fontSize="lg" fontWeight="bold">
                    Distyopoly Playbook
                </DialogHeader>
                <DialogBody>
                    <HowToTabs />
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    );
}
