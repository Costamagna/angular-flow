export interface Edge{
    id: string | null;
    type: string;
    data: any | undefined;
    source: string;
    target: string;
}