import { useContext } from "react"
import { RoomSettingsContext } from "@app/providers"
import { Button } from "@chakra-ui/react"

export const RoomInviteButton = () => {
    const { roomSettings } = useContext(RoomSettingsContext)
    return (<Button variant="outline" colorPalette="red">room: {roomSettings.roomName}</Button>)
}
