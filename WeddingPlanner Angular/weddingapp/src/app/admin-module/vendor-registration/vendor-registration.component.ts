import { Component, OnInit } from '@angular/core';


import {Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { VendordataService } from 'src/app/services/vendordata.service';
import { Observable } from 'rxjs';
import { Vendor } from 'src/app/classes/vendor';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {


  error:any;
  vendorForm:FormGroup;
  theVendor:Vendor;
  submitted:boolean=false;
  constructor(public formBuilder: FormBuilder,public svc:VendordataService ,public router:Router,public activateRoute:ActivatedRoute) 
  {}

  ngOnInit()
   {
    this.vendorForm=this.formBuilder.group(
      {
        vendorId: [null],
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        email :['',[Validators.required,Validators.email]],
        contactNo:['',[Validators.required,Validators.maxLength(10)]],

        address:this.formBuilder.group(
          {
            area:['',Validators.required],
            street: ['',Validators.required],
            city:['',Validators.required],
            state:['',Validators.required],
            pinCode:['',[Validators.required,Validators.maxLength(10)]]


          }
        ),
        serviceType:['',Validators.required] 
         
       
          
      }
    );


    this.activateRoute.paramMap.subscribe(params=>{
      const vendorId=+params.get('id');
      if(vendorId)
      {
        this.getVendorbyId(vendorId);
      }
    })
  }

  validateNumber(event) {
    const keyCode = event.keyCode;

    const excludedKeys = [8,9, 37, 39, 46];

    if (!((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }

  validateInput(event) {
    const keyCode = event.keyCode;

    const excludedKeys = [8,9, 37, 39, 46];

    if (!((keyCode >= 65 && keyCode <= 90) ||
      (keyCode >= 97 && keyCode <= 122) || (keyCode==32) ||
      (excludedKeys.includes(keyCode)))) {
      event.preventDefault();
    }
  }

  get f() { return this.vendorForm.controls; }
  getVendorbyId(id)
  {
    this.svc.getVendorById(id).subscribe(
      (res)=>
      this.editVendor(res),
      (err)=>console.log(err)

    );
  }

  editVendor(vendor)
  {
    this.vendorForm.patchValue({
      vendorId:vendor.vendorId,
      firstName:vendor.firstName,
      lastName:vendor.lastName,
      email: vendor.email,
      contactNo:vendor.contactNo,
      address:{
        area:vendor.address.area,
        street:vendor.address.street,
        city:vendor.address.city,
        state:vendor.address.state,
        pinCode:vendor.address.pinCode
      },
      serviceType:vendor.serviceType

    })
  }

/*
*Purpose: To save vendor details
*Author : Poonam k
* Date : 25-Jan-19
*/
  onSubmit()
  {

    this.submitted = true;

        // stop here if form is invalid
        if (this.vendorForm.invalid) {
            return;
        }
    console.log(this.vendorForm.value);
    this.theVendor=this.vendorForm.value;
    console.log(this.theVendor.vendorId);
    if(this.theVendor.vendorId==null)
    {
     
    this.svc.saveVendorDetails(this.vendorForm.value).subscribe((res)=>
    {

     
      if(res['message']!=null)
      {
          this.error="Email already exist";
          alert("Email alreay exist");
          return;
      }
      else
      {
        alert("Vendor registered successfully");
        this.router.navigate(['vendorlist']);
      }
  })
}
else{
  alert("update")
  this.svc.updateVendorDetails(this.vendorForm.value).subscribe((res)=>
  {

   
      alert("Vendor registered successfully");
      this.router.navigate(['vendorlist']);
    
})
}
}
}



