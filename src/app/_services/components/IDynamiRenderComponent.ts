import { Component, Input } from "@angular/core";
import { DynamicRenderInput } from "./dynamic-render.input";

@Component({
    selector: '',
    standalone: true,
    imports: [],
    template: '',
  })
export abstract class IDynamicRenderComponent{
    @Input()
    public readonly position!: { x:number, y:number};
    @Input()
    public readonly data!: DynamicRenderInput;

    @Input()
    public customStyle: Record<string, string|undefined|null> = {};

    public defaultStyle(): Record<string, string | undefined | null>{
        return {
        position: "absolute",
        top: this.position.y + "px",
        left: this.position.x + "px"
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