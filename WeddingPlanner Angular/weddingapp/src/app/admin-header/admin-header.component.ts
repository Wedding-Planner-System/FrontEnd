import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public svc: UserLoginService,public router:Router) { }

  ngOnInit() {
  }

  Logout()
  {
    this.svc.loggedin=false;
    this.router.navigate(['login']);
    localStorage.setItem('isLoggedIn',"false");
  }

}
