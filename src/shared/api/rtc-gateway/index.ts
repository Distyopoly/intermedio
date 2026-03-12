import { LivekitRtcGateway } from "./livekit/livekitRtcGateway";
import { RtcGateway } from "./RtcGateway";

export type { RtcGateway } from "./RtcGateway";

export const rtcGateway: RtcGateway = new LivekitRtcGateway();
export type { MetadataDto } from "./livekit/types";
