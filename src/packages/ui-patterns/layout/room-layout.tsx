"use client";

import { Splitter, SplitterPanel, SplitterResizeTrigger } from "@/packages/ui-components/splitter";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { PropsWithChildren, useState } from "react";
import { ComponentProps } from "react";
import VideoView from "../conference/video-view";
import { ControlBar } from "../conference/control-bar";

type LayoutType = "split" | "game-only";

type Props = ComponentProps<typeof Box> & PropsWithChildren<{
    initialLayout: LayoutType;
    h?: string;
}>


export const RoomLayout = ({ initialLayout, children, h = "100%", ...props }: Props) => {

    const [layout, setLayout] = useState<LayoutType>(initialLayout);
    const orientation = useBreakpointValue({ base: "vertical", md: "horizontal" }) as "vertical" | "horizontal";

    const gameId = "game"
    const videoId = "videocall"

    const controlbarHeight = "8vh";

    if (layout === "split") {
        return (
            <Box justifyContent="stretch" h={h} {...props}>
                <ControlBar h={controlbarHeight} w="100%" justifyContent="center" direction="horizontal" layerStyle="fill.subtle" alignItems="center"/>
                <Splitter flex="1" maxH={`calc(${h} - ${controlbarHeight})`} orientation={orientation}
                    panels={[
                        { id: videoId, collapsible: true, collapsedSize: 20, minSize: 23 },
                        { id: gameId, minSize: 23 },
                    ]} >
                    <SplitterPanel id={videoId}>
                        <VideoView layerStyle="fill.solid"/>
                    </SplitterPanel>
                    <SplitterResizeTrigger id={`${videoId}:${gameId}`} />
                    <SplitterPanel id={gameId}>
                        {children}
                    </SplitterPanel>
                </Splitter>
            </Box>
        );
    }

    if (layout === "game-only") {
        return (
            <Box h={h} {...props}>
                {children}
            </Box>
        );
    }
}