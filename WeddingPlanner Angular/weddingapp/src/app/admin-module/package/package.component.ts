import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Package } from 'src/app/classes/package';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import { CommonTypeService } from 'src/app/services/common-type.service';
import { VendordataService } from 'src/app/services/vendordata.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {


  error:any;
  packageForm:FormGroup;
  thePackage:Package;
  img:any;
  submitted:boolean=false;
  packageType:any;
  vendorList:any;
  constructor(public svc: PackagesService,public svc1:CommonTypeService, public svc2:VendordataService,  public formBuilder: FormBuilder ,public router:Router,public activateRoute:ActivatedRoute) 
  {}

  ngOnInit() 
  {

    this.packageType=this.svc1.type;
    
  
    this.svc2.getAllVendors(this.svc1.type).subscribe((res)=>
    {

      this.vendorList=res;
    })



    this.packageForm=this.formBuilder.group(
      {
        packageId: [null],
        vendorId: [''],
        packageName:['',Validators.required],
        price:['',Validators.required],
        extra:[''],
        packageImage:[''],
        packageType:[this.svc1.type]

      }
    );

    
    
    this.activateRoute.paramMap.subscribe(params=>{
      const packageId=+params.get('id');
      if(packageId)
      {
        this.getPackageId(packageId);
       
        
      }
    })
  }

  get p() { return this.packageForm.controls; }
  getPackageId(id)
  {
    this.svc.getPackageById(id).subscribe(
      (res)=>
      this.editPackage(res),
      (err)=>console.log(err)

    );
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
  editPackage(pkg)
  {
    this.packageForm.patchValue({
      packageId:pkg.packageId,
      vendorId:pkg.vendorId,
      packageName:pkg.packageName,
      price:pkg.price,
      extra:pkg.extra,
      packageImage:pkg.packageImage,
      packageType: pkg.packageType
    })
  }


  /* Purpose: To get selected image
  * Author : Poonam K 
  * Date : 29-Jan-19
  */
  onSelectFile(event) 
  {
    this.img = event.target.files[0];
  }

  /* Purpose: To save package data
  * Author : Poonam K
  * Date : 29-Jan-19
  */
 onSubmit()
 {

  
 
   this.submitted=true;
 
   if(this.packageForm.invalid){
   
     return;
   }
  
   this.thePackage=this.packageForm.value;
   console.log(this.thePackage)
 
   
   if(this.thePackage.packageId==null)
   {
    
   this.svc.savePackageDetails(this.thePackage,this.img).subscribe((res)=>
   {

     if(res['message']!=null)
     {
         this.error="Pcakage already exists";
         alert("Package already exists");
     }
     else
     {
       alert("Package registered successfully");
       this.router.navigate(['packages']);
     }
 })
}
else{
 
 
 this.svc.updatePackageDetails(this.packageForm.value).subscribe((res)=>
 {

  
     alert("Package registered successfully");
     this.router.navigate(['packages']);
   
})
}
}
}

