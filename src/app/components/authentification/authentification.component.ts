import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { authentification } from 'src/app/shared/models/authentication';

const authentificationInterface : authentification = {
  Login : "",
  password : ""
} ;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent  {

  authentificationRequest = authentificationInterface;
  

  onSubmit(): void{

    console.log(this.authentificationRequest.Login);
    console.log(this.authentificationRequest .password);
    console.log(this.authentificationRequest);
  }
}
