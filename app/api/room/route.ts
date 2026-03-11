import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@features/auth/config/auth-options";
import { rtcGateway } from "@shared/api/rtc-gateway";





export async function POST(request: NextRequest,
    { params }: { params: Promise<{ roomId: string }> }) {
    // isAuthorized?
    const session = await getServerSession(authOptions);
    if (!session?.user?.name) {
        return Response.json({ error: "Unauthorized"}, { status: 401 });
    }

    // getUserMetadata
    // ...
    const participantName = session.user.name;

    // const body = await request.json();
    // const { roomName } = body;
    const metadata = { gm: participantName };

    return rtcGateway.createRoom(JSON.stringify(metadata))
        .then(roomId => Response.json({ roomId }, { status: 201 }))
        .catch(error => Response.json({ error }, { status: 500 }));
}
