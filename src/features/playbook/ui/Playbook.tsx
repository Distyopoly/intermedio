import { Button } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTrigger } from "@/packages/ui-components/dialog";
import { HowToTabs } from "./tabs";
import { GiBookmarklet } from "react-icons/gi";

type Props = ComponentProps<typeof Button> & {};

export function Playbook({ ...props }: Props) {

    return (
        <DialogRoot size={{ mdDown: "full", md: "xl" }}>
            <DialogTrigger asChild>
                <Button size="lg" variant="subtle" aria-label="Playbook" px={2} {...props}>Playbook<GiBookmarklet /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogCloseTrigger />
                <DialogHeader letterSpacing="wide" fontSize="lg" fontWeight="bold">
                    Playbook
                </DialogHeader>
                <DialogBody>
                    <HowToTabs />
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    );
}
