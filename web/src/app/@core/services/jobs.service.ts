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
  get(id: any): Promise<Job> {
    return from(this.apiService.GetJob(id)).pipe(map(j => {
      return {
        id: j.id,
        title: j.title,
        duration: j.duration,
        owner: j.owner,
        status: j.status,
        startTime: new Date(j.startTime),
      } as Job;
    })).toPromise();
  }
  delete(job: Job): Promise<null> {
    return from(this.apiService.DeleteJob({
      id: job.id,
    })).pipe(map(r => {
      return null;
    }))
      .toPromise();
  }

  getCompletionPercentage(j: Job): number {
    return Math.max(Math.min(Math.round(
      ((new Date().valueOf() - (j.startTime || new Date()).valueOf()) / (1000 * 60 * 60 * j.duration)) * 100
    ), 100), 0);
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
                startTime: new Date(j.startTime)
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
