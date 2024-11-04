import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import './topics.ts/01-basic-types';
import './topics.ts/02-object-interface'
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
