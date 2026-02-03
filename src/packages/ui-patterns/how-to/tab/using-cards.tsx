import { StepsCompletedContent, StepsContent, StepsIndicator, StepsItem, StepsList, StepsNextTrigger, StepsPrevTrigger, StepsRoot } from "@/packages/ui-components/steps";
import { Box, Button, ButtonGroup, HStack, ScrollArea, Spacer } from "@chakra-ui/react";
import { LuCheck, LuPrinter } from "react-icons/lu";

export default function UsingCards() {
    return (
        <StepsRoot h="100%" size="sm" w="100%" alignItems="center"
            linear={false} display="flex" flexDirection="column"
            justifyContent="stretch"
        >
            <StepsContent index={0} flex="10" w="100%">
                <ButtonGroup w="full" justifyContent="center" gap={3} direction="column">
                    <Button>
                        <LuPrinter />
                        Print
                    </Button>
                    <Button>Use Phone</Button>
                </ButtonGroup>
            </StepsContent>

            <StepsCompletedContent h="100%" flex="10" w="100%">
                <LuCheck />
                That's it!
            </StepsCompletedContent>

            <ScrollArea.Root size="xs" justifySelf="flex-end">
                <ScrollArea.Viewport>
                    <ScrollArea.Content paddingEnd="5" py={4}>
                        <StepsList w="fit-content" gap={2}>
                            <StepsItem title="Get Cards" index={0} completedIcon={null} />
                            <StepsItem title="Try them out" index={1} completedIcon={null} />
                            <StepsItem title="Where to cards" index={2} completedIcon={null} />
                        </StepsList>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="horizontal" />
            </ScrollArea.Root>

            <ButtonGroup mt={5} w="full" size="sm" display="flex" justifyContent="space-around" variant="outline"
                justifySelf="flex-end"
            >
                <StepsPrevTrigger asChild>
                    <Button>Prev</Button>
                </StepsPrevTrigger>
                <StepsNextTrigger asChild>
                    <Button>Next</Button>
                </StepsNextTrigger>
            </ButtonGroup>
        </StepsRoot >
    );
}