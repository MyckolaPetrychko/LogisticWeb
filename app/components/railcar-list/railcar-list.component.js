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
var railcar_item_component_1 = require('../railcar-item/railcar-item.component');
var railway_service_1 = require('../../shared/railway.service');
var RailCarList = (function () {
    function RailCarList(railService) {
        this.railService = railService;
        this.railcars = [];
    }
    RailCarList.prototype.ngOnInit = function () {
        var _this = this;
        this.railService.getRailCars().subscribe(function (railcar) { _this.railcars = railcar; });
    };
    RailCarList = __decorate([
        core_1.Component({
            selector: 'railcar-list',
            templateUrl: './app/components/railcar-list/railcar-list.component.html',
            styleUrls: ['./app/components/railcar-list/railcar-list.component.css'],
            directives: [railcar_item_component_1.RailCarItem]
        }), 
        __metadata('design:paramtypes', [railway_service_1.railwayService])
    ], RailCarList);
    return RailCarList;
}());
exports.RailCarList = RailCarList;
//# sourceMappingURL=railcar-list.component.js.map