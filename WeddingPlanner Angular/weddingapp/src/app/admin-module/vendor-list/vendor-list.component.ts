import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendordataService } from 'src/app/services/vendordata.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

 
  vendorList:any=[];
  theVendor:any;
  constructor(public svc:VendordataService,public router:Router) { }


  /*
  * Purpose : To get all vendor list and display it on browser
  * Author : Poonam K
  * Date : 20 -Jan -2019
  */
  ngOnInit() {
    this.svc.getAllVendors().subscribe((res)=>
    {
      this.vendorList=res;
    })
  }


  /*
  * Purpose : To register new vendor
  * Author : Poonam K
  * Date : 20 -Jan -2019
  */ 
  NavigateToNew()
  {
      this.router.navigate(['vendorreg']);
  }


  /*
  * Purpose : To delete existing vendor
  * Author : Poonam K
  * Date : 20 -Jan -2019
  */ 
  DeleteVendor(id)
  {
    this.svc.deleteVendorById(id).subscribe((res)=>
    {
      if(res!=null)
      {
        alert("Record deleted Successfully");
        window.location.reload();
      }
      else{
          alert("Failed to delete");
      }
      
    })
  }

   /*
  * Purpose : To delete existing vendor
  * Author : Poonam K
  * Date : 20 -Jan -2019
  */ 
 UpdateVendor(id)
 {
      this.router.navigate(['/editVendor',id]);
 }
}





