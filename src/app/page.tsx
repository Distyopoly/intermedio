"use client";

import { Center, HStack } from "@chakra-ui/react";
import { LinkButton } from "@/packages/ui-components/link-button";

export default function Home() {
  return (
    <Center>
      <HStack mt="30vh" gap={5}>
        <LinkButton href="/platform" variant="solid" size="xl">Platform</LinkButton>
        <LinkButton href="/standalone" variant="outline"  size="xl">Standalone</LinkButton>
      </HStack>
    </Center>
  );
}
