import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ISample } from './sample';

@Injectable()
export class SampleService {
    private _sampleUrl = 'http://localhost:50264/api/Gene/GetAllSamples';
    //private _sampleUrl = 'api/samples/samples.json';
    constructor(private _http: Http) { }

    getSamples(): Observable<ISample[]> {
        return this._http.get(this._sampleUrl)            
            .map((response: Response) => <ISample[]>response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }   

    private handleError(error: Response) {        
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
