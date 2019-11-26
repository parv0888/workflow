import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../@core/services/jobs.service';
import { Job } from '../../../@core/models/Job';
import { APIService } from '../../../API.service';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts/lib/base-chart.directive';
import { interval } from 'rxjs';
import { Person } from '../../../@core/models/Person';
import { PersonsService } from '../../../@core/services/persons.service';

@Component({
  selector: 'ngx-jobs-dashoard',
  templateUrl: './jobs-dashboard.component.html',
  styleUrls: ['./jobs-dashboard.component.scss'],
})
export class JobsDashboardComponent implements OnInit {
  timeRemaining: any = 30;
  timeMins: number = 30;
  autoNotifications: boolean;
  persons: Person[] = [];
  ngOnInit(): void {
    this.apiService.OnCreateJobListener.subscribe((o: any) => {
      const created = o.value.data.onCreateJob;
      this.jobsService.get(created.id).then((job) => {
        if (this.jobs.findIndex(j => j.id === job.id) < 0) {
          this.jobs.push(job);
        }
      });
    });
    this.apiService.OnUpdateJobListener.subscribe((o: any) => {
      const updated = o.value.data.onUpdateJob;
      const index = this.jobs.findIndex(j => j.id === updated.id);
      if (index >= 0) {
        this.jobs[index] = { ...this.jobs[index], status: updated.status };
      }
      this.updateProgress();
    });
    this.jobsService.list().then((jobs) => {
      this.jobs.push(...jobs);
      this.updateProgress();
    });
    interval(1000).subscribe(() => {
      this.jobs.forEach(j => {
        this.completionPercentages[j.id] = this.jobsService.getCompletionPercentage(j);
      });
      
      if (this.autoNotifications) {
        this.timeRemaining = ((this.timeRemaining * 60) - 1) / 60;
        console.log('time to send', this.timeRemaining);
        this.pieChartData2 = [this.timeMins - this.timeRemaining, this.timeRemaining];
        if (this.timeRemaining <= 0) {

          this.timeRemaining = this.timeMins;
          this.sendNow(true);
        }
      }
    });
  }

  completionPercentages: { [key: string]: number } = {};

  updateProgress() {
    this.pieChartData = [0, 0, 0, 0, 0];
    this.jobs.forEach(j => {
      (this.pieChartData[j.status] as number)++;
      this.completionPercentages[j.id] = this.jobsService.getCompletionPercentage(j);
    });
  }

  statuses = [
    'early',
    'on time',
    'delayed',
    'critically delayed',
    'completed',
  ];
  jobs: Job[] = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Early', ['On', 'Time'], 'Delayed', 'Criticaly Delayed', 'Completed'];
  public pieChartData: SingleDataSet = [300, 500, 100, 400, 100];
  public pieChartData2: SingleDataSet = [0, 0];
  public pieChartLabels2: Label[] = [['Time', 'Remaining'], 'Time'];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(
    private jobsService: JobsService,
    private apiService: APIService,
    private personsService: PersonsService) {


  }

  async deleteJob(job: Job) {
    return this.jobsService.delete(job).then(() => {
      const index = this.jobs.findIndex(j => j.id === job.id);
      return this.jobs.splice(index, 1);
    });
  }

  autoNotificationsChanged() {
    this.timeRemaining = this.timeMins || 30;
    this.pieChartData2 = [this.timeMins - this.timeRemaining, this.timeRemaining];
  }

  timeMinsChanged() {
    this.timeRemaining = this.timeMins || 30;
    this.autoNotifications = false;
    this.pieChartData2 = [this.timeMins - this.timeRemaining, this.timeRemaining];
  }

  SendNotification(person: Person) {
    this.personsService.sendNotification(person);
  }

  sendNow(refresh = false) {
    if (refresh) {
      this.personsService.list().then((ps) => {
        this.persons = ps;
        this.persons.forEach(p => {
          this.personsService.sendNotification(p);
        });
      })
    } else {
      this.persons.forEach(p => {
        this.personsService.sendNotification(p);
      });
    }
  }
}
