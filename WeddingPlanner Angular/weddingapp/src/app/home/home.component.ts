import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedin:any;
  constructor(public svc: UserLoginService) { }

  ngOnInit() {

    this.isLoggedin=localStorage.getItem("isLoggedIn");
if(this.isLoggedin.localeCompare("true"))
{
  this.svc.loggedin=true;
}
  }

}
