import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { authentification } from 'src/app/modules/authentification';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent  {
  email: string = "";
  password : string = "";
  
  authentificationRequest : authentification = {
    Login : "",
    password : ""
  } ;

  onSubmit(): void{
    this.authentificationRequest.Login =  this.email;
    this.authentificationRequest.password = this.password;
    console.log(this.email);
    console.log(this.password);
    console.log(this.authentificationRequest);
  }
}
