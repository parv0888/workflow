import { Person } from '../models/Person';
import { APIService } from '../../API.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Job } from '../models/Job';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  delete(job: Job): Promise<null> {
    return from(this.apiService.DeleteJob({
      id: job.id,
    })).pipe(map(r => {
      return null;
    }))
      .toPromise();
  }

  constructor(private apiService: APIService) { 

  }
  list(): Promise<Job[]> {
    return from(this.apiService.ListJobs())
      .pipe(
        map(res => res.items),
        map(a => {
          return a.map(j => {
            if (j) {
              return {
                id: j.id,
                title: j.title,
                duration: j.duration,
                owner: j.owner,
                status: j.status,
              } as Job;
            } else {
              return null;
            }
          })
        })).toPromise();
  }

  // add(person: Person) {
  //   from(this.apiService.CreatePerson({
  //     username : person.username,
  //     email : person.email
  //   })).pipe();
  // }
}
