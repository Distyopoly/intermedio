"use client";

import { Center, VStack, HStack, Text, Heading, Clipboard, IconButton } from "@chakra-ui/react";
import { LinkButton } from "@/packages/ui-components/link-button";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function LandingPage() {
  return (
    <Center minH="calc(100vh - 16vh)" p={4}>
      <VStack
        gap={8}
        p={{ base: 8, md: 12 }}
        borderRadius="3xl"
        border="1px solid"
        borderColor="whiteAlpha.300"
        bg="blackAlpha.600"
        backdropFilter="blur(16px)"
        boxShadow="2xl"
        textAlign="center"
        maxW="xl"
        w="full"
      >
        <VStack gap={4}>
          <Heading size="5xl" fontWeight="black" letterSpacing="tight">
            Project Under Development
          </Heading>
          <Text fontSize="lg" color="fg.muted" maxW="md">
            Distyopoly is a modern board game experience designed to bring people together, no matter the distance. We're currently crafting something special.
          </Text>
        </VStack>

        <VStack gap={4} w="full" alignItems="center">
          <Text fontWeight="bold" fontSize="sm" letterSpacing="widest" textTransform="uppercase" color="fg.subtle">
            Get in touch
          </Text>

          <VStack gap={3} w="full">
            {/* Instagram */}
            <Clipboard.Root value="@distyopoly">
              <HStack
                bg="whiteAlpha.100"
                p={3}
                borderRadius="xl"
                w="full"
                justifyContent="space-between"
                _hover={{ bg: "whiteAlpha.200" }}
                transition="background 0.2s"
              >
                <HStack gap={3}>
                  <FaInstagram size={20} />
                  <Text fontWeight="medium">Instagram</Text>
                </HStack>
                <HStack gap={4}>
                  <Text color="fg.muted" fontSize="sm">@distyopoly</Text>
                  <Clipboard.Trigger asChild>
                    <IconButton size="sm" variant="ghost" aria-label="Copy Instagram handle">
                      <Clipboard.Indicator />
                    </IconButton>
                  </Clipboard.Trigger>
                </HStack>
              </HStack>
            </Clipboard.Root>

            {/* Email */}
            <Clipboard.Root value="main.leswell+distyopoly@gmail.com">
              <HStack
                bg="whiteAlpha.100"
                p={3}
                borderRadius="xl"
                w="full"
                justifyContent="space-between"
                _hover={{ bg: "whiteAlpha.200" }}
                transition="background 0.2s"
              >
                <HStack gap={3}>
                  <MdEmail size={20} />
                  <Text fontWeight="medium">Email</Text>
                </HStack>
                <HStack gap={4}>
                  <Text color="fg.muted" fontSize="sm" display={{ base: "none", sm: "block" }}>main.leswell...</Text>
                  <Clipboard.Trigger asChild>
                    <IconButton size="sm" variant="ghost" aria-label="Copy Email address">
                      <Clipboard.Indicator />
                    </IconButton>
                  </Clipboard.Trigger>
                </HStack>
              </HStack>
            </Clipboard.Root>
          </VStack>
        </VStack>

        <LinkButton
          href="/platform"
          variant="solid"
          size="xl"
          w="full"
          height="14"
          fontSize="lg"
          borderRadius="xl"
          bg="white"
          color="black"
          _hover={{ bg: "gray.200", transform: "translateY(-2px)" }}
          transition="all 0.2s"
        >
          Try it out
        </LinkButton>
      </VStack>
    </Center>
  );
}
