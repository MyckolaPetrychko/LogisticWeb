"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var app_component_1 = require('./components/application/app.component');
var rail_data_1 = require('./shared/rail.data');
platform_browser_dynamic_1.bootstrap(app_component_1.Logistic, [
    http_1.HTTP_PROVIDERS,
    { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: rail_data_1.RailSeedData },
]);
//# sourceMappingURL=main.js.map