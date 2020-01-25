import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data} from '@angular/router';
import { from } from 'rxjs';
import { UserLoginService } from './services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'weddingapp';
    isLoggedin:string=null;
    sub:any;
 constructor( private route: ActivatedRoute,
  private router: Router,
  public svc:UserLoginService,
  )
 {

 }

 ngOnInit()
 {
this.isLoggedin=localStorage.getItem("isLoggedIn");
if(this.isLoggedin !=null)
{
  this.svc.loggedin=true;
  //return this.router.navigate(['home']);
}
else if (this.isLoggedin==null){
this.svc.loggedin=false;
}

this.sub=this.route
      .data
      .subscribe(v => console.log(v));
      alert(JSON.stringify(this.sub));

 }



}
