"use client";

import * as React from 'react';
import { RoomContext, PreJoin, LocalUserChoices } from '@livekit/components-react';
import { Room } from 'livekit-client';
import { useEffect, useState } from 'react';
import { PropsWithChildren } from 'react';
import { ClientOnly } from '@chakra-ui/react';
import { useLiveKitToken } from './useLiveKitToken';
import { useRouter } from 'next/navigation';

type Props = PropsWithChildren<{
  roomId: string;
  errorComponent: React.ReactNode;
  loadingComponent: React.ReactNode;
}>;

export function LiveKitRoomContextProvider({ children, roomId, errorComponent, loadingComponent }: Props) {
  const [room] = useState(() => new Room({}));
  const [userChoices, setUserChoices] = useState<LocalUserChoices | undefined>(undefined);
  const router = useRouter();

  const { token, error, isLoading } = useLiveKitToken(roomId);

  const livekit_url = process.env.NEXT_PUBLIC_LIVEKIT_URL;

  console.log(roomId, "<-------=-------------");

  // You can manage room connection lifecycle here
  useEffect(() => {
    if (!token || !userChoices) return;
    if (!livekit_url) {
      console.error("NEXT_PUBLIC_LIVEKIT_URL is not defined");
      return;
    }

    room.connect(livekit_url, token).then(async () => {
      // Apply user choices after connection
      if (userChoices.videoEnabled) {
        await room.localParticipant.setCameraEnabled(true, { deviceId: userChoices.videoDeviceId });
      } else {
        await room.localParticipant.setCameraEnabled(false);
      }

      if (userChoices.audioEnabled) {
        await room.localParticipant.setMicrophoneEnabled(true, { deviceId: userChoices.audioDeviceId });
      } else {
        await room.localParticipant.setMicrophoneEnabled(false);
      }
    }).catch((err) => {
      // "Client initiated disconnect" is expected when unmounting/re-mounting in Strict Mode
      if (err.message !== 'Client initiated disconnect') {
        console.error('Failed to connect to LiveKit:', err);
      }
    });

    room.on("disconnected", () => {
      router.push("..");
    });

    return () => {
      room.disconnect();
    };
  }, [room, token, userChoices, router]);

  if (isLoading) {
    return (
      loadingComponent
    );
  }

  if (error || (!token && !isLoading)) {
    return (
      errorComponent
    );
  }

  if (!userChoices) {
    return (
      // FIXME: refactor prejoin and add room details
      <ClientOnly fallback={loadingComponent}>
        <div data-lk-theme="default" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PreJoin
            onSubmit={(values) => setUserChoices(values)}
            defaults={{
              username: "", // Could be pre-filled from session if passed as prop
              videoEnabled: true,
              audioEnabled: true,
            }}
          />
        </div>
      </ClientOnly>
    );
  }


  return (
    <ClientOnly fallback={loadingComponent}>
      <RoomContext.Provider value={room}>
        <div data-lk-theme="default" style={{ height: "100%" }}>
          {children}
        </div>
      </RoomContext.Provider>
    </ClientOnly>
  );
};
