import { Component, OnInit }  from '@angular/core';

import { ISample } from './Sample';
import { SampleService } from './sample.service';

@Component({
    templateUrl: 'app/samples/sample-list.component.html',
    styleUrls: ['app/samples/sample-list.component.css']
})

export class SampleListComponent implements OnInit { 
    pageTitle: string = 'Sample List';   
    listFilter: string;
    errorMessage: string;

    samples: ISample[];

    constructor(private _sampleService: SampleService) {
        
    }

    ngOnInit(): void {        
         this._sampleService.getSamples()
                            .subscribe((samples: ISample[]) => {
                                this.samples = samples;
                            });
                            // .subscribe(samples => this.samples = samples,
                            //            error => this.errorMessage = <any>error);
    }
}