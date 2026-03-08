'use client'

import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from "@packages/ui-components/dialog"
import { RoomInviteButton } from "./RoomInviteButton"
import { RoomInviteModalContent } from "./modal-content/ModalContent"

export const RoomInviteModal = () => {
    return (
        <DialogRoot defaultOpen
            size="lg"
        >
            <DialogTrigger asChild>
                <RoomInviteButton />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Szoba Meghívó</DialogTitle>
                </DialogHeader>
                <DialogBody pb="4">
                    <RoomInviteModalContent />
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}
