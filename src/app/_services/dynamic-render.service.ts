import { Injectable, Type } from '@angular/core';
import { DynamicRenderLabelComponent } from './components/Label/dynamic-render.label.component';
import { DynamicRenderTextComponent } from './components/Text/dynamic-render.text.component';
import { Node } from '../model/node.model';
import { DynamicRenderSimpleLineComponent } from './components/SimpleLine/dynamic-render.simpleLine.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicRenderService{
  

  private nodeTypeDictionary : Record<string, Type<any>> = {
    "DynamicRender:Text": DynamicRenderTextComponent,
    "DynamicRender:Label": DynamicRenderLabelComponent
  };

  private edgeTypeDictionary : Record<string, Type<any>> = {
    "DynamicRender:SimpleLine": DynamicRenderSimpleLineComponent,
  };

  constructor() { }

  public RegisterNewType( key: string, type: Type<any>){
    if(key in this.nodeTypeDictionary)
      throw new Error("The key must be unique")

    this.nodeTypeDictionary[key] = type;
  }

  public GetNodeType(key: string): Type<any> {
    if(key in this.nodeTypeDictionary)
      return this.nodeTypeDictionary[key];
    
    throw new Error('Method not implemented.');
  }

  public GetEdgeType(key: string): Type<any> {
    if(key in this.edgeTypeDictionary)
      return this.edgeTypeDictionary[key];
    
    throw new Error('Method not implemented.');
  }


  public CheckNodesValidite(nodes: Node[]){
     return nodes.filter( (node: Node): boolean  =>{
        if(this.IsNodeValide(node))
          return true;
        
        console.error("error inside a node", node);
        return false;
     })
  }

  private IsNodeValide(node: Node): boolean{
    
    if(! (node.type in this.nodeTypeDictionary))
      return false;

    return true;
  }
}
