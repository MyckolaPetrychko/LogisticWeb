import { Component } from '@angular/core';

import { MenuComponent } from './../menu/menu.component';
import { OperationComponent } from './../operation/operation.component';
import { FilterComponent } from './../filter/filter.component';
import { MainTable } from './../maintable/maintable.component';
import { AditionalTable } from './../aditionaltable/aditionaltable.component';

@Component({
    selector: 'logistic',
    templateUrl: './app/components/application/app.component.html',
    styleUrls: ['./app/components/application/app.component.css'],
    directives: [ MenuComponent, OperationComponent, FilterComponent, MainTable, AditionalTable ]
})

export class Logistic{

}