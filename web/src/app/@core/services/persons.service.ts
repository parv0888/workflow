import { Person } from '../models/Person';
import { APIService } from '../../API.service';
import { from, Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {


  constructor(private apiService: APIService) { }
  list(): Promise<Person[]> {
    return from(this.apiService.ListPersons())
      .pipe(
        map(res => res.items),
        map(a => {
          return a.map(p => {
            if (p) {
              return {
                id: p.id,
                username: p.username,
                pushToken: p.pushToken,
                jobs: [],
              } as Person;
            } else {
              return null;
            }
          })
        })).toPromise();
  }

  add(person: Person, password: string): Promise<Person> {
    const ret = from(Auth.signUp({
      username: person.username,
      password: password,
      attributes: {
        email: person.email
      }
    })).pipe(map(res => {
      return from(this.apiService.CreatePerson({
        username: person.username,
        id: res.userSub,
        name: person.username,
        pushToken: ' ',
        email: person.email,
      } as any))
        .pipe(
          map(r => r as any as Person)
        )
    }), flatMap(o => o)).toPromise();

    return ret;
  }

  sendNotification(person: Person) {
    if (person.pushToken) {
      this.apiService.SendNotificationToken(person.pushToken);
    }
  }
}
