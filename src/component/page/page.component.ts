import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {PageService} from './page.service';
import {AlertComponent} from './alert/alert.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @ViewChild('fixContainer', {read: ViewContainerRef}) fixContainer: ViewContainerRef; // 具体容器

  constructor(
    private pageService: PageService,
    private container: ViewContainerRef
  ) {
    this.pageService.container = this.container; // 由于服务与视图无关，所以需要在组件中把容器传进服务
  }

  ngOnInit() {
  }

  createComponent(type: string): void {
    const component = this.pageService.createComponent({
      component: AlertComponent, // 需要动态创建的组建请在module的entryComponents中加入
      type,
      // container: this.fixContainer // 如果需要将创建的组件挂载在具体的容器内，则传入container属性
    });
    setTimeout(() => {
      component.destroy(); // 关闭组建
    }, 5000);
  }
}
