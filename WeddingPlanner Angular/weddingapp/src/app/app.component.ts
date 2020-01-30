import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data, NavigationStart} from '@angular/router';
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
    rt:string;
    routeHidden = true;
 constructor( private route: ActivatedRoute,
  private router: Router,
  public svc:UserLoginService,
  )
 {

  this.rt=router.url;
 }

 ngOnInit()
 {

  this.router.events.subscribe( (e) => {
    if (e instanceof NavigationStart) {
      if (e.url === "/") {
          this.routeHidden = false;
          console.log(this.routeHidden);
      
     
      } else if(e.url=='/admin') {
          this.routeHidden = true;
          console.log(this.routeHidden);
      }
      
    }
  })
this.isLoggedin=localStorage.getItem("isLoggedIn");
if(this.isLoggedin !=null)
{
  this.svc.loggedin=true;
  //return this.router.navigate(['home']);
}
else if (this.isLoggedin==null){
this.svc.loggedin=false;
}



 }



}
