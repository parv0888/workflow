import { Component } from '@angular/core';
import { PersonsService } from '../../../@core/services/persons.service';
import { Person } from '../../../@core/models/Person';
import { FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'ngx-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  persons: Person[] = [];
  form: any;

  constructor(private personsService: PersonsService, private formBuilder: FormBuilder, private router : Router) {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      username: '',
      password: '',
    });
  }

  onSubmit(person: any) {
    person.pushToken = null,
      this.personsService.add(person, person.password).then(p => {
        this.router.navigateByUrl('/pages/users/list');
      });
  }
}
