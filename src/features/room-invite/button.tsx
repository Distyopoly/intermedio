import { useContext } from "react"
import { RoomSettingsContext } from "../../app/providers/room-settings-provider"
import { Button } from "@chakra-ui/react"

export const RoomInviteButton = () => {
    const { roomSettings } = useContext(RoomSettingsContext)
    return (<Button variant="outline" colorPalette="red">room: {roomSettings.roomName}</Button>)
}
