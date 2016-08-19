import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { RailWay } from './railway.model';

@Injectable()
export class railwayService {
    
    constructor(private http: Http){}

    getRailCars() : Observable<RailWay[]>{
        return this.http.get('api/railcar')
            .map(res => { console.log(res); return res.json().data })
            .catch(this.handleError);
    }

     private handleError(error: any): Observable<any> {
        console.log('Произошла ошибка', error);
        return Observable.throw(error.message || error);
    }

}
