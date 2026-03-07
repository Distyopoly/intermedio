import { useContext } from "react"
import { RoomDraftContext } from "@features/manage-room"
import { Button } from "@chakra-ui/react"

export const RoomInviteButton = () => {
    const { roomDraft } = useContext(RoomDraftContext)
    return (<Button variant="outline" colorPalette="red">room: {roomDraft.roomName}</Button>)
}
