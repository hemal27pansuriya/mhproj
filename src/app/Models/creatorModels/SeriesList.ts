import { SeriesSummary } from "./SeriesSummary";


export interface SeriesList {
    available: number;
    returned: number;
    collectionURI: string;
    items: SeriesSummary[];
}
