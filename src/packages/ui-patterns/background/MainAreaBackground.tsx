"use client";

import { ComponentProps, PropsWithChildren } from "react";
import { BgPortal } from "./BgPortal";


type Props = ComponentProps<typeof BgPortal> & {
    src?: string;
    themeInvert?: boolean;
}

export function MainAreaBackground({ src, themeInvert = false, zIndex = -20, ...props }: Props) {

    return (
        <BgPortal src={src} themeInvert={themeInvert} zIndex={zIndex} {...props}/>
    );
}