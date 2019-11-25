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
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule as ngFormsModule, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersTableComponent } from './users-table/users-table.component';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { UserAddComponent } from './user-add/user-add.component';

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
  ],
  declarations: [
    UsersTableComponent,
    UsersComponent,
    UserAddComponent,
  ],
})
export class UsersModule { }
