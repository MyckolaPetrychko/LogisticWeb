"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var menu_component_1 = require('./../menu/menu.component');
var operation_component_1 = require('./../operation/operation.component');
var filter_component_1 = require('./../filter/filter.component');
var maintable_component_1 = require('./../maintable/maintable.component');
var aditionaltable_component_1 = require('./../aditionaltable/aditionaltable.component');
var Logistic = (function () {
    function Logistic() {
    }
    Logistic = __decorate([
        core_1.Component({
            selector: 'logistic',
            templateUrl: './app/components/application/app.component.html',
            styleUrls: ['./app/components/application/app.component.css'],
            directives: [menu_component_1.MenuComponent, operation_component_1.OperationComponent, filter_component_1.FilterComponent, maintable_component_1.MainTable, aditionaltable_component_1.AditionalTable]
        }), 
        __metadata('design:paramtypes', [])
    ], Logistic);
    return Logistic;
}());
exports.Logistic = Logistic;
//# sourceMappingURL=app.component.js.map