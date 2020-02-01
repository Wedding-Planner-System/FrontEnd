import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/user-login.service';
import { CommonTypeService } from 'src/app/services/common-type.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  
  constructor(public svc: UserLoginService,public router:Router,public svc1:CommonTypeService) 
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
  showVendorList()
  {
    this.svc1.type="";
    this.router.navigate(['vendorlist'])
  }
  showDecorationList()
  {
    this.svc1.type="Decoration";
    this.router.navigate(['packages'])
  }
  showCateringList()
  {
    
    this.svc1.type="Catering";
    this.router.navigate(['packages'])
  }

}
