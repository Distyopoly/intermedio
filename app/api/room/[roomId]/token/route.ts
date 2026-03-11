import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@features/auth/config/auth-options";
import { rtcGateway } from "@shared/api/rtc-gateway";

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
    // ...
    const participantName = session.user.name;
    
    // get metadata for room
    const metadataDto = await rtcGateway.getRoomMetadataDto(roomId);
    
    if (!metadataDto) {
        // room not found
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
    const room_access_token = await rtcGateway.generateRoomAccessToken(roomId, participantName, isGM);

    // return token
    return Response.json({ room_access_token });
}
