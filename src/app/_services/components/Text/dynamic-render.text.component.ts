import { Component, ComponentRef, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicRenderInput } from '../dynamic-render.input';
import { IDynamicRenderComponent } from '../IDynamiRenderComponent';

@Component({
  selector: 'dynamic-render-text',
  standalone: true,
  imports: [],
  template: "<div>Text: {{this.data!.text}}</div>",
  styles: []
})
export class DynamicRenderTextComponent extends IDynamicRenderComponent{

}
