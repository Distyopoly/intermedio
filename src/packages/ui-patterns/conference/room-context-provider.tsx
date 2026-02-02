"use client";

import * as React from 'react';
import { RoomContext } from '@livekit/components-react';
import { Room } from 'livekit-client';
import { useEffect, useState } from 'react';
import { PropsWithChildren } from 'react';
import { Center, ClientOnly, Spinner, Text, VStack } from '@chakra-ui/react';
import { useLiveKitToken } from '@/packages/hooks/useLiveKitToken';
import { useRouter } from 'next/navigation';

type Props = PropsWithChildren<{ 
  roomName: string;
  errorComponent: React.ReactNode;
  loadingComponent: React.ReactNode;
}>;


export function RoomContextProvider({ children, roomName, errorComponent, loadingComponent }: Props) {
  const [room] = useState(() => new Room({}));
  const router = useRouter();

  const { token, error, isLoading } = useLiveKitToken(roomName);

  const livekit_url = process.env.NEXT_PUBLIC_LIVEKIT_URL;

  // You can manage room connection lifecycle here
  useEffect(() => {
    if (!token) return;
    if (!livekit_url) {
      console.error("NEXT_PUBLIC_LIVEKIT_URL is not defined");
      return;
    }

    room.connect(livekit_url, token).catch((err) => {
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
  }, [room, token]);

      if (isLoading) {
        return (
          loadingComponent
        );
    }

    if (error) {
        return (
          errorComponent
        );
    }

    if (!token) {
        return (
          errorComponent
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
