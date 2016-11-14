import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { SampleListComponent } from './sample-list.component';
import { SampleService } from './sample.service';
import { SampleFilterByUserPipe } from './sample-filter.pipe';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [    
    SharedModule,
    RouterModule.forChild([
      { path: 'samples', component: SampleListComponent }      
    ])
  ],
  declarations: [
    SampleListComponent,
    SampleFilterByUserPipe
  ],
  providers: [
    SampleService
  ]
})
export class SampleModule {}
