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
    interval(1000).subscribe((n) => {
      console.log('time to send', this.timeRemaining);
      this.timeRemaining = (this.timeRemaining*60 - 1)/60;
      if(this.timeRemaining <= 0) {
        this.timeRemaining = this.timeMins;
        if(this.autoNotifications){
          this.sendNow();
        }
      }
    });
  }

  deleteUser(person: Person) {
  }

  SendNotification(person: Person) {
    this.personsService.sendNotification(person);
  }

  sendNow() {
    this.persons.forEach(p => {
      this.personsService.sendNotification(p);
    });
  }

  autoNotificationsChanged() {
    this.timeRemaining = this.timeMins || 30;
  }
  
  timeMinsChanged(){
    this.timeRemaining = this.timeMins || 30;
    this.autoNotifications = false;
  }
}
