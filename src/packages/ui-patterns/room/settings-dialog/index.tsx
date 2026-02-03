import { DialogRoot, DialogTrigger, DialogContent, DialogHeader, DialogBody, DialogFooter, DialogCloseTrigger, DialogTitle, DialogDescription, DialogActionTrigger } from "@/packages/ui-components/dialog";
import { Button, ScrollArea, IconButton } from "@chakra-ui/react";
import { CiSettings } from "react-icons/ci";
import LayoutMode from "./layout-mode";
import RoomName from "./room-name";

export function SettingsDialog() {
    return (
        <DialogRoot size="lg">
            <DialogTrigger asChild>
                <IconButton variant="outline" size="2xl" aria-label="Room Settings">
                    <CiSettings/>
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
                                <RoomName mb={10} mt={3} ml={3}/>
                                <LayoutMode/>
                            </ScrollArea.Content>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar />
                    </ScrollArea.Root>
                </DialogBody>
                <DialogFooter justifyContent="start">
                    <Button>Save</Button>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}
