import { ComponentProps } from "react"
import { Button } from "@chakra-ui/react"
import { useRoomInfo } from "../../model/useRoomInfo"

type Props = ComponentProps<typeof Button> & {};

export const RoomInviteButton = ({ ...props }: Props) => {
    const { name } = useRoomInfo();

    if (name.length === 0) {
        return null;
    }

    return (<Button {...props} variant="outline" colorPalette="red">room: {name}</Button>)
}
