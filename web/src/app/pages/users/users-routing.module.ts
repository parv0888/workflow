import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list',
        component: UsersTableComponent,
      },
      {
        path: 'add',
        component: UserAddComponent,
      },
      {
        path: 'add',
        component: UserAddComponent,
      },
      // {
      //   path: 'update',
      //   component: FormLayoutsComponent,
      // },
      // {
      //   path: 'buttons',
      //   component: ButtonsComponent,
      // },
      // {
      //   path: 'datepicker',
      //   component: DatepickerComponent,
      // },
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
