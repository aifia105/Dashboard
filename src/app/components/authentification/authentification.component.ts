import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authentification } from 'src/app/shared/models/authentication';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent  {

  authFrom = new FormGroup({
    login: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  });

  
  

  onSubmit(): void{
   
    console.log(this.authFrom.value);
    console.log(this.authFrom.value.login);
    console.log(this.authFrom.value.password);
  }
}
