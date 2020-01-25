import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  isLoggedin:any;
  constructor(public svc: UserLoginService,public router:Router) { }

  ngOnInit() {

    this.isLoggedin=localStorage.getItem("isLoggedIn");
    if(this.isLoggedin.localeCompare("true"))
    {
      this.svc.loggedin=true;
    }
  }

  Logout()
  {
    localStorage.removeItem('isLoggedIn');
    this.svc.loggedin=false;
    this.router.navigate(['login']);
  
  }

}
