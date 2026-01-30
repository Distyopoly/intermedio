"use client";

import { Button } from "@/packages/ui-primitives/Button";
import { VStack } from "@chakra-ui/react";
import { LinkButton } from "@/packages/ui-components/link-button";
import { AbsoluteCenter } from "@chakra-ui/react";

export default function Home() {

  return (
    <AbsoluteCenter>
      <VStack>
        <LinkButton href="/standalone/xo" variant="outline">XO </LinkButton>
      </VStack>
    </AbsoluteCenter>
  );
}