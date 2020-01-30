import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  error:string;

  constructor(public svc :UserLoginService,public router:Router) 
  {}

  ngOnInit() 
  {}

  /* Purpose: To validate user login details
  * Author : Poonam K
  * Date : 20-Jan-19
  */
  validateUser()
  {
   this.svc.validateUser(this.username,this.password).subscribe((res)=>{
      console.log(res);
      if(res=='Success')
      {
        this.svc.loggedin=true;
        localStorage.setItem('isLoggedIn',"true");
        this.router.navigate(['admin']).then(()=>
        {
          window.location.reload();
        })
      }
      else
      {
        this.username="";
        this.password="";
        this.error="Invalid User Name and Password";
      }
     })
  }
}
