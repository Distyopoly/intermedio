import { Link } from "@/packages/ui-primitives/Link";
import { Heading, Text, VStack } from "@chakra-ui/react";

export default function RoadmapVotingPage() {
    return (
        <VStack>
            <Heading>Roadmap Voting</Heading>
            <Text fontSize="lg">This feature gives subscribers a voice in shaping the product's direction and priorities. 
                Read more about the mechanism in the <Link variant="underline" layerStyle="fill.subtle" href="/roadmap-voting/voting-system">voting-system</Link> 
            </Text>
        </VStack>
    );
}
