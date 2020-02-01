import { Component, OnInit } from '@angular/core';
import {CommonTypeService} from 'src/app/services/common-type.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public svc1:CommonTypeService,public router:Router) { }

  ngOnInit() {
  }

  showDecorationList()
  {
    this.svc1.usertype="Decoration";
    this.router.navigate(['userpackagelist'])
  
  }
  showCateringList()
  {
    this.svc1.usertype="Catering";
    this.router.navigate(['userpackagelist'])
  
  }
  showVenueList()
  {
    this.svc1.usertype="Venue";
    this.router.navigate(['venue'])
  }


}
