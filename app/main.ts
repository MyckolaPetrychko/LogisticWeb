import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { Logistic } from './components/application/app.component';
import { RailSeedData } from './shared/rail.data';

bootstrap(Logistic, [
     HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: RailSeedData },
]);