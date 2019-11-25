import { OnInit, Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth, Hub } from 'aws-amplify';

@Component({
  selector: 'ngx-auth',
  styleUrls: ['auth.component.scss'],
  templateUrl: './auth.component.html',
  providers: [AmplifyService],
})
export class AuthComponent implements OnInit{
  ngOnInit(): void {
  }
  
  checkUser(): void {
    Auth.currentAuthenticatedUser()
      .then(user => console.log({ user }))
      .catch(err => console.log(err));
  }
}
