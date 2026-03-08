import { Text, FieldHelperText, FieldLabel, FieldRoot, Separator, VStack, HStack } from "@chakra-ui/react";
import { QrCode } from "@packages/ui-components/chakra/qr-code";
import { Link } from "@packages/ui-components/link";

export function OverviewTab() {
    const poneToolLink = `${window.location.origin}/phone-tool`
    const tutorialLink = `${window.location.origin}/tutorial`

    return (
        <VStack align="stretch" width="full">
            {/* <Text fontSize="3xl">Overview</Text> */}
            <Text py={6} fontSize="lg">
                Can't find your way around? Read our <b><Link variant="underline" href={tutorialLink}>tutorial</Link></b>.
            </Text>
            <Text py={6} fontSize="lg">
                Can't remember the rules? Keep this <b>playbook</b> handy!
            </Text>

            {/* <HStack width="full" mt={10} mb={2}>
                <Separator flex="1" />
                <Text flexShrink="0" fontSize="lg">How to use this playbook?</Text>
                <Separator flex="1" />
            </HStack>

            <Text py={2} fontSize="md">
                Choose a topic, follow the cheatsheet. 
            </Text> */}

            <HStack width="full" mt={4} mb={2}>
                <Separator flex="1" />
                <Text flexShrink="0" fontSize="lg">Phone Tool</Text>
                <Separator flex="1" />
            </HStack>

            {/* TODO: hide in phone tool */}
            <HStack width="full" gap={5}>
                <QrCode value={poneToolLink} size="md" />
                <Text lineHeight="taller" py={2} fontSize="md">
                    Browse this playbook on your phone! <br />
                    It can also be your <b>command center</b> if you are a GM. <br />
                    Use your phone as a temporary card deck.
                </Text>

            </HStack>

            <Separator my={4} />

            <Text>
                GM = Game Master
            </Text>
        </VStack>
    );
}
