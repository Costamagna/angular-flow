import { Component, Input } from "@angular/core";
import { DynamicRenderInput } from "./dynamic-render.input";

@Component({
    selector: '',
    standalone: true,
    imports: [],
    template: '',
  })
export abstract class IDynamicRenderEdge{
    @Input()
    public readonly position!: { sourceX:number, sourceY:number, targetX: number, targetY: number};
    @Input()
    public readonly data!: DynamicRenderInput;

    @Input()
    public customStyle: Record<string, string|undefined|null> = {};

    public defaultStyle(): Record<string, string | undefined | null>{
        return {
            position: "absolute",
            height: (Math.abs( this.position.sourceY - this.position.targetY))+"px",
            width: (Math.abs( this.position.sourceX - this.position.targetX))+"px",
            top: this.position.sourceY+"px",
            left: this.position.sourceX+"px",
        };
    }

    public BuildStyle(): Record<string, string|undefined|null>{
        let style: Record<string, string|undefined|null> = {};
        Object.keys(this.defaultStyle()).forEach(
          val => {style[val] = this.defaultStyle()[val];}
        )
        Object.keys(this.customStyle).forEach(
          val => {style[val] = this.customStyle[val];}
        );
        return style;
    }
}