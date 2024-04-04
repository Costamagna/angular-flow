export interface DynamicRenderInput{
    type: string;
    text: string | undefined;
    html: string | undefined;
    position: { x: number, y: number};
}