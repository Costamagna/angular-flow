import { Component, ComponentRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { SimpleTextComponent } from '../simple-text/simple-text.component';
import { Node } from '../model/node.model';
import { DynamicRenderService } from '../_services/dynamic-render.service';
import { DynamicRenderInput } from '../_services/components/dynamic-render.input';
import { Edge } from '../model/edge.model';

@Component({
  selector: 'app-dynamic-render',
  standalone: true,
  imports: [],
  
  /*
  template: `
    <h2 (click)="this.renderSavedComponent()">Dynamic Render Component</h2>
    <div style="position: relative">
      <div #container></div>
    </div>
  `,*/
  templateUrl: './dynamic-render.component.html',

  styleUrl: './dynamic-render.component.scss'
})
export class DynamicRenderComponent{
  
  @ViewChild('container', { read: ViewContainerRef }) 
  container: ViewContainerRef | undefined;

  @Input()
  nodes: Node[] = [];

  @Input()
  edges: Edge[] = [];
  
  constructor( public dynamicRenderService: DynamicRenderService) {}

  renderSavedComponent() {
    this.container!.clear();
    this.renderNodes();
    this.renderEdges()
  }


  private renderNodes(){
    this.nodes.forEach( (node, index) => {
        const ref = this.container!.createComponent(this.dynamicRenderService.GetNodeType(node.type));
        ref.instance.data = node.data;
        ref.instance.position = node.position;
    });
  }

  private renderEdges() {
    this.edges.forEach( (edge, index) => {
      debugger;
      const ref = this.container!.createComponent(this.dynamicRenderService.GetEdgeType(edge.type));
      ref.instance.data = edge.data;
      ref.instance.position = {
          sourceX: this.nodes.filter( node => node.id == edge.source)[0].position.x,
          sourceY: this.nodes.filter( node => node.id == edge.source)[0].position.y,
          targetX: this.nodes.filter( node => node.id == edge.target)[0].position.x,
          targetY: this.nodes.filter( node => node.id == edge.target)[0].position.y
      };
    })
  }
}
