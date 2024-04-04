import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DynamicRenderComponent } from "./dynamic-render/dynamic-render.component";
import { Node } from './model/node.model';
import { Edge } from './model/edge.model'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, DynamicRenderComponent]
})
export class AppComponent {
  title = 'angular-flow';

  nodes : Node[] = [
     {
      id: "1",
      type: "DynamicRender:Text",
      position: {x: 0, y: 0},
      data: {
        text: "Questo è il TEXT"
      }
     },
     
     {
      id: "2",
      type: "DynamicRender:Label",
      position: {x: 100, y: 50},
      data: {
        text: "Questa è la LABEL"
      }
     }
  ];

  edges: Edge[] = [
    {
      id: null,
      type: "DynamicRender:SimpleLine",
      source: "1",
      target: "2",
      data: {} 
    }
  ];

}


