import { Component } from '@angular/core';
import { JobsService } from '../../../@core/services/jobs.service';
import { Job } from '../../../@core/models/Job';
import { APIService } from '../../../API.service';

@Component({
  selector: 'ngx-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss'],
})
export class JobsTableComponent {

  statuses = [
    'early',
    'on time',
    'delayed',
    'critically delayed',
  ];
  jobs: Job[] = [];

  constructor(private jobsService: JobsService, private apiService: APIService) {
    this.apiService.OnUpdateJobListener.subscribe((o:any) => {
      const updated = o.value.data.onUpdateJob;
      console.log(o.value.data.onUpdateJob);
      const index = this.jobs.findIndex(j => j.id === updated.id);
      if (index >= 0) {
        this.jobs[index] = { ...this.jobs[index], status : updated.status };
      }
    });
    jobsService.list().then((jobs) => {
      this.jobs.push(...jobs);
    });
  }

  async deleteJob(job: Job) {
    return this.jobsService.delete(job).then(() => {
      const index = this.jobs.findIndex(j => j.id === job.id);
      return this.jobs.splice(index, 1);
    });
  }
}
