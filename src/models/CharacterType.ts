export type CharacterType = {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    resourceURI: string;
    comics: Object;
    series: Object;
    stories: Object;
    events: Object;
    urls: Array<Object>
}