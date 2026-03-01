"use client";

import { DialogRoot, DialogTrigger, DialogContent, DialogHeader, DialogBody, DialogFooter, DialogCloseTrigger, DialogTitle, DialogDescription, DialogActionTrigger } from "@/packages/ui-components/dialog";
import { ScrollArea, IconButton } from "@chakra-ui/react";
import { CiSettings } from "react-icons/ci";
import { ComponentProps } from "react";
import InputContainer from "./input-element/input-container";

type Props = ComponentProps<typeof IconButton>;



export function SettingsDialog({ ...props }: Props) {

    return (
        <DialogRoot size={{ mdDown: "full", md: "lg" }}>
            <DialogTrigger asChild>
                <IconButton {...props} aria-label="Room Settings">
                    <CiSettings />
                </IconButton>
            </DialogTrigger>
            <DialogContent gap={3}>
                <DialogHeader>
                    <DialogTitle>
                        Room Settings</DialogTitle>
                </DialogHeader>
                <DialogBody display="flex" flexDirection="column" flex="1" minH="0" gap="8">
                    <DialogDescription>
                        Configure your room settings
                    </DialogDescription>

                    <ScrollArea.Root height="100%" size="sm">
                        <ScrollArea.Viewport>
                            <ScrollArea.Content paddingEnd="5" textStyle="sm">
                                <InputContainer />
                            </ScrollArea.Content>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar />
                    </ScrollArea.Root>
                </DialogBody>
                <DialogCloseTrigger mr={2} mt={2} asChild>
                    {/* <Button size="sm" mr={2} mt={2}>Back</Button> */}
                    Back
                </DialogCloseTrigger>
            </DialogContent>
        </DialogRoot>
    )
}
