import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../shared/services/auth-service.service';


export const authGuardGuard: CanActivateFn = (route, state) => {
  console.log(localStorage.getItem("user"));
  return inject(AuthServiceService)
  .isLoggedIn() ? true : inject(Router).createUrlTree(['/authentication']);
  
};


