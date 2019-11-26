import { Component } from '@angular/core';
import { PersonsService } from '../../../@core/services/persons.service';
import { Person } from '../../../@core/models/Person';
import { FormBuilder } from '@angular/forms';
import { APIService } from '../../../API.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-job-add-form',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss'],
})
export class JobAddComponent {
  persons: Person[] = [];
  form: any;

  constructor(private personsService: PersonsService,
    private formBuilder: FormBuilder,
    private apiService: APIService,
    private router: Router) {
    personsService.list().then((persons) => {
      this.persons.push(...persons);
    });
    this.form = this.formBuilder.group({
      title: '',
      duration: 12,
      status: 0,
      ownerId: '',
      startTime: '',
      startDate: new Date(),
    });
  }

  onSubmit(values: any) {
    console.log(values);
    const startTime = new Date(values.startDate as Date);
    startTime.setHours(values.startTime.hour);
    startTime.setMinutes(values.startTime.minute);
    const jobInput = {
      duration: values.duration,
      jobOwnerId: values.ownerId,
      personJobsId: values.ownerId,
      status: values.status,
      title: values.title,
      startTime : startTime.toISOString(),
    };
    console.log(jobInput);
    this.apiService.CreateJob(jobInput)
      .then((res) => this.router.navigateByUrl('/pages/jobs/list'));
  }
}
