import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  
  constructor(public svc: UserLoginService,public router:Router) 
  {}



  ngOnInit() 
  {}

  /* Purpose: To logout and delete localstorage data
  * Author : Poonam K
  * Date : 25-Jan-19
  */
  Logout()
  {
    if(localStorage.getItem("isLoggedIn")!=null)
    {
    localStorage.removeItem('isLoggedIn');
    this.svc.loggedin=false;
    this.router.navigate(['login']);
    }
  }

}
