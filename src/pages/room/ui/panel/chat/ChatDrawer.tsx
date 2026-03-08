"use client";

import { DrawerContent, DrawerHeader, DrawerRoot, DrawerTitle } from "@packages/ui-components/drawer";
import { ChatPanel } from "./Chat";
import { useLayoutContext } from "@livekit/components-react";

export function ChatDrawer() {
    const { widget } = useLayoutContext();

    if (!widget) {
        return null;
    }

    return (
        <DrawerRoot
            open={!!widget.state?.showChat}
            size="md"
            closeOnInteractOutside={true}
            lazyMount
            unmountOnExit={false}
        >
            <DrawerContent>
                {/* <DrawerHeader>
                    <DrawerTitle>
                        Chat
                    </DrawerTitle>
                </DrawerHeader> */}
                <ChatPanel />
            </DrawerContent>
        </DrawerRoot>
    )
}