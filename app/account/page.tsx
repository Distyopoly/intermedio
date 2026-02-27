"use client";

import { Image, Text, VStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function AccountPage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <Text fontSize="xl" fontWeight="bold" >Please sign in first!</Text>
        );
    }

    return (
        <>
            <Text fontSize="xl" fontWeight="bold" mb={2} >Account Info</Text>
            <VStack gap={2} alignItems="start">
                {session.user?.image && <Image src={session.user?.image} alt={session.user?.name ?? ""} />}
                <Text>ID: {session.user?.id}</Text>
                <Text>Username: {session.user?.name}</Text>
                {session.user?.email && <Text>Email: {session.user?.email}</Text>}
            </VStack>
        </>
    );
}