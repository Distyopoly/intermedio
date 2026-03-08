import { Text, FieldHelperText, FieldLabel, FieldRoot, Separator, VStack } from "@chakra-ui/react";
import { QrCode } from "@packages/ui-components/chakra/qr-code";
import { Link } from "@packages/ui-components/link";

export function QuickPeak() {
    const poneToolLink = `${window.location.origin}/phone-tool`
    const tutorialLink = `${window.location.origin}/tutorial`

    return (
        <VStack>
            <Text>
                Can't find your way around? Read our <b><Link variant="underline" href={tutorialLink}>tutorial</Link></b>.
                <br/>
                <br/>
                Can't remember the rules? Keep this <b>playbook</b> open!
            </Text>

            <Separator/>
            <FieldRoot>
                <FieldLabel>Use your phone as a tool:</FieldLabel>
                <QrCode value={poneToolLink} size="md"/>
                <FieldHelperText>
                    You can browse this playbook on your phone. <br/>
                    Use your phone as a temporary card deck. <br/>
                    <b>It can also be your command center if your a GM.</b>
                </FieldHelperText>
            </FieldRoot>
        </VStack>
    );
}
