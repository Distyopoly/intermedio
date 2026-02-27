import { AccessToken, RoomServiceClient } from "livekit-server-sdk";
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/packages/ui-patterns/auth/next-auth/auth-options";
import { nanoid } from "nanoid";

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
    console.log("Token API session:", session);

    if (!session?.user?.name) {
        return Response.json({ error: "Unauthorized", debug: session }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const roomName = searchParams.get("roomName");
    if (!roomName) {
        return Response.json({ error: "Missing roomName parameter" }, { status: 400 });
    }

    const participantName = session.user.name;

    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;
    const livekitUrl = process.env.LIVEKIT_URL;

    if (!apiKey || !apiSecret || !livekitUrl) {
        return Response.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const roomService = new RoomServiceClient(livekitUrl, apiKey, apiSecret);
    const rooms = await roomService.listRooms([roomName]);
    let room = rooms.find(r => r.name === roomName);

    if (!room) {
        // Auto-create room if it doesn't exist, making this user the creator
        room = await roomService.createRoom({
            name: roomName,
            emptyTimeout: 2 * 60, // 2 minutes
            maxParticipants: 20,
            metadata: JSON.stringify({
                gm: participantName,
                matchId: nanoid()
            })
        });
    }

    let isGM = false;
    if (room.metadata) {
        try {
            const metadata = JSON.parse(room.metadata);
            isGM = metadata.gm === participantName;
        } catch (e) {
            console.error("Failed to parse room metadata", e);
        }
    }

    const at = new AccessToken(apiKey, apiSecret, {
        identity: participantName,
        name: participantName,
    });
    at.addGrant({ roomJoin: true, room: roomName, roomAdmin: isGM });

    const token = await at.toJwt();

    return Response.json({ token });
}
