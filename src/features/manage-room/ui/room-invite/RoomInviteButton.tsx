import { useContext } from "react"
import { RoomMetadataContext } from "../../model/room-metadata.context"
import { Button } from "@chakra-ui/react"

export const RoomInviteButton = () => {
    const context = useContext(RoomMetadataContext)

    if (!context) return null;
    const { state } = context;

    return (<Button variant="outline" colorPalette="red">room: {state.roomName}</Button>)
}
