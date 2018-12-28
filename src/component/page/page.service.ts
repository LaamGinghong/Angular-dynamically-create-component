import {ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  container: ViewContainerRef;  // 挂载动态创建的组件的容器
  componentRef: ComponentRef<Type<any>>;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {
  }

  createComponent(
    value: {
      component: Type<any>,
      type: string,
      container?: ViewContainerRef
    }
  ): ComponentRef<Type<any>> {
    if (value.container) {
      this.container = value.container;
    }
    this.container.clear(); // 确保该组件只创建一次，如需多次创建可以去除
    const factory: ComponentFactory<Type<any>> = this.resolver.resolveComponentFactory(value.component);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance['type'] = value.type; // 往动态创建的组建当中传入参数
    this.componentRef.instance['outPutType'].subscribe((outputValue: string) => { // 动态创建组件传出参数
      console.log(outputValue);
    });
    return this.componentRef;
  }
}
