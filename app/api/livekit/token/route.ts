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

    // is the RoomName parameter present?
    const { searchParams } = new URL(request.url);
    const roomName = searchParams.get("roomName");
    if (!roomName) {
        return Response.json({ error: "Missing roomName parameter" }, { status: 400 });
    }

    // getUserMetadata
    // ...
    const participantName = session.user.name;

    // search for room
    // const roomExists = await rtcGateway.existsRoom(roomName);
    const metadataDto = await rtcGateway.getRoomMetadataDto(roomName);
    
    if (!metadataDto) {
        // console.log(`Room with ID ${roomName} not found`);
        // return Response.json({ error: "Bad Request"}, { status: 400 });
        await rtcGateway.createRoom(roomName, JSON.stringify({ gm: participantName }));
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
    const token = await rtcGateway.generateRoomAccessToken(roomName, participantName, isGM);

    // return token
    return Response.json({ token });
}
