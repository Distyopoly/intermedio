import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@features/auth/config/auth-options";
import { rtcGateway } from "@shared/api/rtc-gateway";
import { roomService } from "@entities/room";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ roomId: string }> }
) {
    const { roomId } = await params;

    const session = await getServerSession(authOptions);
    console.log("Token API session:", session);

    // isAuthorized?
    if (!session?.user?.name) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // getUserMetadata
    const participantName = session.user.name;
    


    // get metadata for room
    const room = await roomService.getRoom(roomId);
    
    if (!room) {
        // room not found
        console.log(`Room with ID ${roomId} not found`);
        return Response.json({ error: "Bad Request"}, { status: 400 });
    }

    // check if user is GM
    let isGM = false;
    if (room) {
        try {
            isGM = room.gameMaster === participantName;
        } catch (e) {
            console.error("Failed to parse room metadata", e);
            return Response.json({ error: "Internal Server Error" }, { status: 500 });
        }
    }

    // create token
    const room_access_token = await rtcGateway.generateRoomAccessToken(roomId, participantName, isGM);

    // return token
    return Response.json({ room_access_token });
}
