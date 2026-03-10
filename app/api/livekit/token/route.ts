import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@features/auth/config/auth-options";
import { rtcGateway } from "@shared/api/rtc-gateway";

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
    console.log("Token API session:", session);

    // isAuthorized?
    if (!session?.user?.name) {
        return Response.json({ error: "Unauthorized", debug: session }, { status: 401 });
    }

    // getUserMetadata
    // ...
    const participantName = session.user.name;

    // is the RoomId parameter present?
    const { searchParams } = new URL(request.url);
    let roomId = searchParams.get("roomId");
    if (!roomId) {
        roomId = await rtcGateway.createRoom(JSON.stringify({ gm: participantName }));
    }
    
    // search for room
    const metadataDto = await rtcGateway.getRoomMetadataDto(roomId);
    
    if (!metadataDto) {
        console.log(`Room with ID ${roomId} not found`);
        return Response.json({ error: "Bad Request"}, { status: 400 });
    }

    // check if user is GM
    let isGM = false;
    if (metadataDto) {
        try {
            const metadata = JSON.parse(metadataDto);
            isGM = metadata.gm === participantName;
        } catch (e) {
            console.error("Failed to parse room metadata", e);
        }
    }

    // create token
    const token = await rtcGateway.generateRoomAccessToken(roomId, participantName, isGM);

    // return token
    return Response.json({ token });
}
