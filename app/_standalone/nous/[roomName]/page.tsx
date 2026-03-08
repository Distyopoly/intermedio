import { Box, Text, VStack } from "@chakra-ui/react";

export default function Page() {
    return (
        <VStack justifyContent="stretch">
            <Box flex={7}>
                <Text>Nous</Text>
            </Box>
            <Box flex={3}>
                <Text>Vous</Text>
            </Box>
        </VStack>
    );
}