import { Component, ComponentRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicRenderInput } from '../dynamic-render.input';
import { IDynamicRenderComponent } from '../IDynamiRenderComponent';

@Component({
  selector: 'dynamic-render-label',
  standalone: true,
  imports: [],
  template: '<div [style]="this.BuildStyle()">Label: {{data!.text}}</div>',
})
export class DynamicRenderLabelComponent extends IDynamicRenderComponent {
}
