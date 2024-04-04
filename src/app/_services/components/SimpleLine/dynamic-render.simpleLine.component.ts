import { Component, ComponentRef, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicRenderInput } from '../dynamic-render.input';
import { IDynamicRenderComponent } from '../IDynamiRenderComponent';
import { IDynamicRenderEdge } from '../IDynamicRenderEdge';

@Component({
  selector: 'dynamic-render-simple-lien',
  standalone: true,
  imports: [],
  template: '<svg [style]="this.BuildStyle()" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" [attr.x2]="this.position.targetX" [attr.y2]="this.position.targetY" style="stroke:red;stroke-width:2" /></svg>',
  styles: []
})
export class DynamicRenderSimpleLineComponent extends IDynamicRenderEdge{

}
