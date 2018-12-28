import {NgModule} from '@angular/core';
import {PageComponent} from './page.component';
import {BrowserModule} from '@angular/platform-browser';
import {PageService} from './page.service';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [PageComponent, AlertComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [PageComponent],
  providers: [PageService],
  entryComponents: [AlertComponent] // 将需要动态创建的组建放进这里
})
export class PageModule {
}
