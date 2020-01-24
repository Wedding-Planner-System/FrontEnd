import { Component, OnInit } from '@angular/core';
import { Vendor } from '../classes/Vendor';
import { VendordataService } from '../services/vendordata.service';
import {Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {


  error:any;
  constructor(public svc: VendordataService) { }

  ngOnInit()
   {

   

  }

  theVendor:any;

  saveVendorDetails(vendorData)
  {
    this.svc.saveVendorDetails(vendorData).subscribe((res)=>
    {

     // console.log(res);
      if(JSON.stringify(res).includes('already'))
      {
          this.error="Email already exists";
      }
      else{
        alert("Vendor registered successfully");
      }

    })
  }


}