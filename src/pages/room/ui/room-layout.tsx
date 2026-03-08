"use client";

import { Splitter, SplitterPanel, SplitterResizeTrigger } from "@packages/ui-components/splitter";
import { Box, ClientOnly, Spinner, useBreakpointValue, Text, Flex } from "@chakra-ui/react";
import { PropsWithChildren, useContext, useState } from "react";
import { ComponentProps } from "react";
import { VideoView } from "./panel/conference-area/VideoArea";
import { ControlBar } from "./panel/control-panel/ControlPanel";
import "@livekit/components-styles";
import { LiveKitRoomContextProvider } from "../model/livekit-room-context-provider";

import { RoomMetadataContext } from "@features/manage-room";
import { ChatPanel } from "./panel/chat-drawer/Chat";
import { ChatDrawer } from "./panel/chat-drawer/ChatDrawer";

type Props = ComponentProps<typeof Box> & PropsWithChildren<{
    roomHeight: { base: string, md: string };
}>


export const RoomLayoutInner = ({ children, roomHeight = { base: "100%", md: "100%" }, ...props }: Props) => {

    const context = useContext(RoomMetadataContext);
    if (!context) {
        return null;
    }

    const { state } = context;
    const layout = state.roomBehaviour;

    const orientation = useBreakpointValue({ base: "vertical", md: "horizontal" }) as "vertical" | "horizontal";
    const h = useBreakpointValue(roomHeight);
    const gameId = "game"
    const videoId = "videocall"

    const controlbarHeight = "8vh";

    if (layout === "video") {
        return (

            <ClientOnly fallback={<Spinner size="xl" />}>
                <Box justifyContent="stretch" h={h} {...props}>
                    <LiveKitRoomContextProvider roomName={state.roomName}
                        loadingComponent={<Spinner size="xl" />}
                        errorComponent={<Text>Room Error</Text>}
                    >
                        <ControlBar h={controlbarHeight} w="100vw" justifyContent="center" alignItems="center"
                            gap={4} wrap="wrap"
                        />
                        <Splitter flex="1" orientation={orientation} maxH={`calc(${h} - ${controlbarHeight})`}
                                panels={[
                                    { id: videoId, collapsible: true, collapsedSize: 20, minSize: 23 },
                                    { id: gameId, minSize: 23 },
                                ]} >
                                <SplitterPanel id={videoId}>
                                    <VideoView layerStyle="fill.solid" />
                                </SplitterPanel>
                                <SplitterResizeTrigger id={`${videoId}:${gameId}`} />
                                <SplitterPanel id={gameId}>
                                    {children}
                                </SplitterPanel>
                            </Splitter>
                            <ChatDrawer />
                    </LiveKitRoomContextProvider>
                </Box>
            </ClientOnly>
        );
    }

    if (layout === "no-video") {
        return (
            <ClientOnly>
                <Box h={h} {...props}>
                    {children}
                </Box>
            </ClientOnly>
        );
    }
}