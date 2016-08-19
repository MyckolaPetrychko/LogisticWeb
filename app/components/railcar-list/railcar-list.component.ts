import { Component, Output, OnInit } from '@angular/core';

import { RailCarItem } from '../railcar-item/railcar-item.component';
import { RailWay } from '../../shared/railway.model';
import { railwayService } from '../../shared/railway.service';

@Component({
    selector: 'railcar-list',
    templateUrl: './app/components/railcar-list/railcar-list.component.html',
    styleUrls: ['./app/components/railcar-list/railcar-list.component.css'],
    directives: [ RailCarItem ]
})

export class RailCarList implements OnInit{   
    railcars: RailWay[];

    constructor(private railService: railwayService){
        this.railcars = [];
    }

    ngOnInit(){
        this.railService.getRailCars().subscribe(railcar => { this.railcars = railcar });
    }

}