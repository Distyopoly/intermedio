"use client";

import * as React from 'react';
import { RoomContext } from '@livekit/components-react';
import { Room } from 'livekit-client';
import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import { ClientOnly, Spinner } from '@chakra-ui/react';


type Props = PropsWithChildren<{ token: string }>;


export function RoomContextProvider({ children, token }: Props) {
  const [room] = React.useState(() => new Room({}));

  // You can manage room connection lifecycle here
  useEffect(() => {
    if (!token) return;
    const url = process.env.NEXT_PUBLIC_LIVEKIT_URL;
    if (!url) {
      console.error("NEXT_PUBLIC_LIVEKIT_URL is not defined");
      return;
    }

    room.connect(url, token).catch((err) => {
      // "Client initiated disconnect" is expected when unmounting/re-mounting in Strict Mode
      if (err.message !== 'Client initiated disconnect') {
        console.error('Failed to connect to LiveKit:', err);
      }
    });

    return () => {
      room.disconnect();
    };
  }, [room, token]);

  return (
    <ClientOnly fallback={<Spinner size="xl" />}>
      <RoomContext.Provider value={room}>
        {children}
      </RoomContext.Provider>
    </ClientOnly>
  );
};