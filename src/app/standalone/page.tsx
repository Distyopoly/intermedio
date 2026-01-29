"use client";

import { Button } from "@/packages/ui/Button";
import { VStack } from "@chakra-ui/react";


export default function Home() {

  return (
    <VStack my={"50vh"}>
      <Button href="/standalone/xo" variant="outline">XO </Button>
    </VStack>
  );
}
