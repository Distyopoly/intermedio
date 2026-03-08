import { useContext } from "react"
import { RoomMetadataContext } from "../../model/room-metadata.context"
import { Button } from "@chakra-ui/react"
import { useRoomInfo } from "../../model/useRoomInfo"

export const RoomInviteButton = () => {
    const { name } = useRoomInfo();

    return (<Button variant="outline" colorPalette="red">room: {name}</Button>)
}
