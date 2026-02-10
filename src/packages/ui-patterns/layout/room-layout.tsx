"use client";

import { Splitter, SplitterPanel, SplitterResizeTrigger } from "@/packages/ui-components/splitter";
import { Box, ClientOnly, Spinner, useBreakpointValue } from "@chakra-ui/react";
import { PropsWithChildren, useState } from "react";
import { ComponentProps } from "react";
import VideoView from "../conference/video-view";
import { ControlBar } from "../conference/control-bar";
import "@livekit/components-styles";
import { RoomContextProvider } from "../conference/room-context-provider";
import { Text } from "@chakra-ui/react";

type LayoutType = "split" | "game-only";

type Props = ComponentProps<typeof Box> & PropsWithChildren<{
    roomName: string;
    initialLayout: LayoutType;
    roomHeight: { base: string, md: string };
}>


export const RoomLayout = ({ roomName, initialLayout, children, roomHeight = { base: "100%", md: "100%" }, ...props }: Props) => {

    const [layout, setLayout] = useState<LayoutType>(initialLayout);
    const orientation = useBreakpointValue({ base: "vertical", md: "horizontal" }) as "vertical" | "horizontal";
    const h = useBreakpointValue(roomHeight);

    const gameId = "game"
    const videoId = "videocall"

    const controlbarHeight = "8vh";

    if (layout === "split") {
        return (

            <ClientOnly fallback={<Spinner size="xl" />}>
                <Box justifyContent="stretch" h={h} {...props}>
                    <RoomContextProvider roomName={roomName}
                        loadingComponent={<Spinner size="xl" />}
                        errorComponent={<Text>Room Error</Text>}
                    >
                        <ControlBar h={controlbarHeight} w="100vw" justifyContent="center" alignItems="center" 
                        gap={4} wrap="wrap"
                        />
                        <Splitter flex="1" maxH={`calc(${h} - ${controlbarHeight})`} orientation={orientation}
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
                    </RoomContextProvider>
                </Box>
            </ClientOnly>
        );
    }

    if (layout === "game-only") {
        return (
            <ClientOnly>
                <Box h={h} {...props}>
                    {children}
                </Box>
            </ClientOnly>
        );
    }
}