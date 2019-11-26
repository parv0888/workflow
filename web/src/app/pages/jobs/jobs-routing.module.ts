import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobAddComponent } from './job-add/jobs-add.component';
import { JobsTableComponent } from './jobs-table/jobs-table.component';
import { JobsComponent } from './jobs.component';
import { JobsDashboardComponent } from './jobs-dashboard/jobs-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
    children: [
      {
        path: 'list',
        component: JobsTableComponent,
      },
      {
        path: 'add',
        component: JobAddComponent,
      },
      {
        path: 'dashboard',
        component : JobsDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}
