import { Component } from '@angular/core';
import { PersonsService } from '../../../@core/services/persons.service';
import { Person } from '../../../@core/models/Person';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UserNotificationsComponent {
  persons: Person[] = [];

  constructor(private personsService: PersonsService) {
    personsService.list().then((persons) => {
      this.persons.push(...persons);
    });
  }

  sendNotification(person:Person){
    this.personsService.sendNotification(person);
  }
  
  
}
