'use client'

import { DialogBody, DialogCloseTrigger, DialogContent, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from "@packages/ui-components/dialog"
import { RoomInviteButton } from "./RoomInviteButton"
import { RoomInviteModalContent } from "./modal-content/ModalContent"
import { useRoomInfo } from "../../model/useRoomInfo"

export const RoomInviteModal = () => {
    const { name } = useRoomInfo()

    return (
        <DialogRoot defaultOpen
            size="lg"
        >
            <DialogTrigger asChild>
                <RoomInviteButton />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {name}
                    </DialogTitle>
                </DialogHeader>
                <DialogBody pb="4">
                    <RoomInviteModalContent />
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}
