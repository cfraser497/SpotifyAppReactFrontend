export function extractPlaylistId(playlistLink: string): string {
    const text = playlistLink.split("?");

    const index = text[0].indexOf("playlist");

    if (index == -1) {
        return "";
    }

    return text[0].substring(index + 9);
}