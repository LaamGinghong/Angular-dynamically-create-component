import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {PageModule} from './component/page/page.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PageModule)
  .catch(err => console.error(err));
