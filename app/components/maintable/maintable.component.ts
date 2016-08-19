import { Component } from '@angular/core';

import { RailCarList } from '../railcar-list/railcar-list.component';
import { railwayService } from '../../shared/railway.service';

@Component({
    selector: 'all-carload',
    templateUrl: './app/components/maintable/maintable.component.html',
    styleUrls: ['./app/components/maintable/maintable.component.css'],
    directives: [ RailCarList ]
})
export class MainTable {

}