import { DialogRoot, DialogTrigger, DialogContent, DialogHeader, DialogBody, DialogFooter, DialogCloseTrigger, DialogTitle, DialogDescription, DialogActionTrigger } from "@/packages/ui-components/dialog";
import { Button, ScrollArea, HStack, Icon, IconButton } from "@chakra-ui/react";
import { RadioCardRoot, RadioCardItem, RadioCardLabel } from "@/packages/ui-components/chakra/radio-card";
import { FaVideo, FaVideoSlash } from "react-icons/fa";
import { TbCrosshair } from "react-icons/tb";
import { PiVideoConferenceLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

export function SettingsDialog() {
    return (
        <DialogRoot size="lg">
            <DialogTrigger asChild>
                <IconButton variant="outline" size="2xl" aria-label="Room Settings">
                    <CiSettings/>
                </IconButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Room Settings</DialogTitle>
                </DialogHeader>
                <DialogBody display="flex" flexDirection="column" flex="1" minH="0" gap="10">
                    <DialogDescription>
                        Configure your room settings
                    </DialogDescription>

                    <ScrollArea.Root height="100%" size="sm">
                        <ScrollArea.Viewport>
                            <ScrollArea.Content paddingEnd="5" textStyle="sm">
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
                {/* <DialogCloseTrigger /> */}
            </DialogContent>
        </DialogRoot>
    )
}
