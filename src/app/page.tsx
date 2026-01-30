"use client";

import { Center, HStack } from "@chakra-ui/react";
import { LinkButton } from "@/packages/ui-components/link-button";
import { MainAreaBackground } from "@/packages/ui-patterns/background";

export default function Home() {
  return (
    <Center>
      <HStack mt="30vh" gap={5}>
        <LinkButton href="/platform" variant="solid" size="xl">Platform</LinkButton>
        <LinkButton href="/standalone" variant="subtle" size="xl">Standalone</LinkButton>
      </HStack>
      <MainAreaBackground bgImage="url('/main-page-background.jpg')" bgSize="cover" bgPos="top" bgRepeat="no-repeat"/>
    </Center>
  );
}
