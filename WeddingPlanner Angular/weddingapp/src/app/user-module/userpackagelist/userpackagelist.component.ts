import { Component, OnInit } from '@angular/core';
import { PackagesService } from 'src/app/services/packages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonTypeService } from 'src/app/services/common-type.service';

@Component({
  selector: 'app-userpackagelist',
  templateUrl: './userpackagelist.component.html',
  styleUrls: ['./userpackagelist.component.css']
})
export class UserpackagelistComponent implements OnInit {

  packageList:any=[];
  packageType:any;

  constructor(public router:Router, public svc:PackagesService, private route :ActivatedRoute,public svc2:CommonTypeService) { }

  ngOnInit() {
    
    this.svc.getAllPackages(this.svc2.usertype).subscribe((res)=>
    {
      alert(JSON.stringify(res));
      this.packageList=res;

    })
  }
  
}