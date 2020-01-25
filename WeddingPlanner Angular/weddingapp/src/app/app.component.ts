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
    
 constructor( private route: ActivatedRoute,
  private router: Router,
  public svc:UserLoginService,
  )
 {

 }

 ngOnInit()
 {}
}
