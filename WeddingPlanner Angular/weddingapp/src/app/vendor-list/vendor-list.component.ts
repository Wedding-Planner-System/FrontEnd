import { Component, OnInit } from '@angular/core';
import { VendordataService } from '../services/vendordata.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  str:any;
  vendorList:any=[];
  constructor(public svc:VendordataService,public router:Router) { }

  ngOnInit() {

    this.svc.getAllVendors().subscribe((res)=>
    {
      this.vendorList=res;
      this.str=JSON.stringify(res);
      //alert(JSON.stringify(res));
    })

  }

  NavigateToNew()
  {
      this.router.navigate(['vendorreg']);
  }

  DeleteVendor(id)
  {
    this.svc.deleteVendorById(id).subscribe((res)=>
    {

      console.log(res);
      alert(res);
      window.location.reload();

    })
  }
  }




