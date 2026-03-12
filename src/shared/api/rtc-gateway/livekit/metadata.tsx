export function parseMetadataDto(metadataDto: string) {
    try {
        return JSON.parse(metadataDto);
    } catch (e) {
        console.error("Failed to parse room metadata", e);
        return null;
    }
}
