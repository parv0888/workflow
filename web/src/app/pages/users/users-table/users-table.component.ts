import { Component } from '@angular/core';
import { PersonsService } from '../../../@core/services/persons.service';
import { Person } from '../../../@core/models/Person';
import { interval } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  persons: Person[] = [];
  timeMins = 30;
  autoNotifications = false;
  timeRemaining: number = 120;
  constructor(private personsService: PersonsService) {
    personsService.list().then((persons) => {
      this.persons.push(...persons);
    });
    
  }

  deleteUser(person: Person) {
  }




}
