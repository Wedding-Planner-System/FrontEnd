import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AHomeComponent implements OnInit {

  
  constructor(public svc: UserLoginService) 
  {}

  ngOnInit() 
  {}

}
