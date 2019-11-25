/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Hub } from 'aws-amplify';
import { Router } from '@angular/router';
import { APIService } from './API.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private apiService: APIService) {
  }

  ngOnInit(): void {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      console.log('A new auth event has happened: ', data);
      if (payload.event === 'signIn') {
        console.log('a user has signed in!');
        this.router.navigateByUrl('/pages/users/list');
      }
      if (payload.event === 'signOut') {
        console.log('a user has signed out!');
        this.router.navigateByUrl('/auth');
      }
    });
  }
}
