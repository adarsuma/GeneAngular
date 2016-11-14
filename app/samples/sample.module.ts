import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { SampleListComponent } from './sample-list.component';
import { SampleService } from './sample.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [    
    SharedModule,
    RouterModule.forChild([
      { path: 'samples', component: SampleListComponent }      
    ])
  ],
  declarations: [
    SampleListComponent
  ],
  providers: [
    SampleService
  ]
})
export class SampleModule {}
