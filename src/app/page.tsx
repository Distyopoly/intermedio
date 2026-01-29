"use client";

import { Center, HStack } from "@chakra-ui/react";
import { Button } from "@/packages/ui/Button";

export default function Home() {
  return (
    <Center>
      <HStack mt="30vh" gap={5}>
        <Button href="/platform" variant="solid" size="xl">Platform</Button>
        <Button href="/standalone" variant="outline"  size="xl">Standalone</Button>
      </HStack>
    </Center>
  );
}
