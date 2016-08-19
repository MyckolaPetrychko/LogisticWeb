import { Component, Input } from '@angular/core';

import { RailWay } from '../../shared/railway.model';

@Component({
    selector: 'railcar-item',
    templateUrl: './app/components/railcar-item/railcar-item.component.html',
    styleUrls: ['./app/components/railcar-item/railcar-item.component.css']
})

export class RailCarItem {
    @Input() railcar: RailWay;
}