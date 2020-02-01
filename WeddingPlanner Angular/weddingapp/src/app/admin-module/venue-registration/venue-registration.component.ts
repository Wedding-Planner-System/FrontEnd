import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Venue } from 'src/app/classes/venue';
import { VenuedataService } from 'src/app/services/venuedata.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VendordataService } from 'src/app/services/vendordata.service';
import { CommonTypeService } from 'src/app/services/common-type.service';

@Component({
  selector: 'app-venue-registration',
  templateUrl: './venue-registration.component.html',
  styleUrls: ['./venue-registration.component.css']
})
export class VenueRegistrationComponent implements OnInit {

  
  error:any;
  venueForm:FormGroup;
  theVenue:Venue;
  img:any;
  submitted:boolean=false;
  imgName:any;
  vendorList:any;
  constructor(public svc1: VendordataService, public svc2:CommonTypeService,   public formBuilder: FormBuilder,public svc :VenuedataService ,public router:Router,public activateRoute:ActivatedRoute)
  {
  }
  

  ngOnInit()
   {
    
    
    this.svc1.getAllVendors(this.svc2.type).subscribe((res)=>
    {

      this.vendorList=res;
    })

    this.venueForm=this.formBuilder.group(
      {
        venueId: [null],
        vendorId: ['',Validators.required],
        venueName:['',Validators.required],
        address: this.formBuilder.group({
          area: ['',Validators.required],
          street: ['',Validators.required],
          city:['',Validators.required],
          state:['',Validators.required],
          pinCode:['',[Validators.required,Validators.maxLength(6)]]
        }
        ),
        capacity:['',Validators.required],
        price:['',Validators.required],
        extra:[''],
        venueImage:[''],
        imageName:['']
      }
    );

    this.activateRoute.paramMap.subscribe(params=>{
      const venueId=+params.get('id');
      if(venueId)
      {
        this.getVenueId(venueId);
      }
    })
  }

  get v() { return this.venueForm.controls; }
  getVenueId(id)
  {
  
    this.svc.getVenueById(id).subscribe(
      (res)=>
      this.editVenue(res),
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
  editVenue(venue)
  {
    this.venueForm.patchValue({
      venueId:venue.venueId,
      vendorId:venue.vendorId,
      venueName:venue.venueName,
      address:{
        area:venue.address.area,
        street:venue.address.street,
        city:venue.address.city,
        state:venue.address.state,
        pinCode:venue.address.pinCode
      },
      capacity:venue.capacity,
      price:venue.price,
      extra:venue.extra,
      venueImage:venue.venueImage,
      imageName:venue.imageName
    })
  }


  /* Purpose: To get selected image
  * Author : Poonam K 
  * Date : 25-Jan-19
  */
  onSelectFile(event) 
  {
    this.img = event.target.files[0];
  
   
  }

  /* Purpose: To save Venue data
  * Author : Poonam K
  * Date : 25-Jan-19
  */
 onSubmit()
 {

 
   this.submitted=true;
 
   if(this.venueForm.invalid){
     return;
   }
   
   this.theVenue=this.venueForm.value;
  
  
   if(this.theVenue.venueId==null)
   {
    
   this.svc.saveVenuedetails(this.theVenue,this.img).subscribe((res)=>
   {

     if(res['message']!=null)
     {
         this.error="Venue already exists";
         alert("Venue already exists");
     }
     else
     {
       alert("Venue registered successfully");
       this.router.navigate(['venuelist']);
     }
 })
}
else{
 
 this.svc.updateVenueDetails(this.venueForm.value,this.imgName).subscribe((res)=>
 {

     alert("Venue registered successfully");
     this.router.navigate(['venuelist']);
   
})
}
}
onReset()
{
  this.router.navigate(['venuelist']);
}
}
