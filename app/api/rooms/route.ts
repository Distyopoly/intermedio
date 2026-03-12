import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@features/auth/config/auth-options";
import { CreateOrUpdateRoomDto } from "@entities/room/api/types";
import { Room, RoomId, roomService } from "@entities/room";





export async function POST(request: NextRequest,
    { params }: { params: Promise<{ roomId: string }> }) {
    // isAuthorized?
    const session = await getServerSession(authOptions);
    if (!session?.user?.name) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // getUserMetadata
    // ...
    const participantName = session.user.name;
    console.log(participantName, "<--------------------");

    const body = await request.json();

    const createRoomDto: CreateOrUpdateRoomDto = body;
    // const createRoomDto: CreateOrUpdateRoomDto = { ...body, gameMaster: participantName };

    const room: Room = await roomService.createRoom(createRoomDto, participantName);

    return Response.json({ roomId: room.id }, { status: 201 });
}
