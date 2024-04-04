export interface Node{
    id: string | null;
    type: string;
    data: any | undefined;
    position: { x: number, y: number }
}