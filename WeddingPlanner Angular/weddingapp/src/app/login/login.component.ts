import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  error:string;

  constructor(public svc :UserLoginService,public router:Router) { }

  ngOnInit() {
  }

  
  validateUser()
  {
   
   
     this.svc.validateUser(this.username,this.password).subscribe((res)=>{
    //   //console.log(res);
      console.log(res);

      if(res=='Success')
      {
       // alert(res);
        
        this.svc.loggedin=true;
        localStorage.setItem('isLoggedIn',"true");
        this.router.navigate(['home']).then(()=>
        {
          window.location.reload();
        })
      }
      else{
        this.username="";
        this.password="";
        this.error="Invalid User Name and Password";
      }
    //  alert(res);
      //this.msg="Record added succesfully";
     // this.router.navigate(['home']);
     })
   // this.svc.validateUser(this.username,this.password);
  }

}
