import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbLayoutModule,
  NbListComponent,
  NbListModule,
} from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './jobs-routing.module';
import { FormsModule as ngFormsModule, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { JobsTableComponent } from './jobs-table/jobs-table.component';
import { JobAddComponent } from './job-add/jobs-add.component';
import { JobsComponent } from './jobs.component';
import { JobsDashboardComponent } from './jobs-dashboard/jobs-dashboard.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    AmplifyAngularModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NbLayoutModule,
    NbListModule,
    ChartsModule
  ],
  declarations: [
    JobsComponent,
    JobsTableComponent,
    JobAddComponent,
    JobsDashboardComponent,
  ],
})
export class JobsModule { }
