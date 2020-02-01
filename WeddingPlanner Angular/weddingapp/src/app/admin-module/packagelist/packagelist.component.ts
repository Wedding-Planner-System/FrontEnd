import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import{Location} from '@angular/common';
import { CommonTypeService } from 'src/app/services/common-type.service';

@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.css']
})
export class PackagelistComponent implements OnInit {

  packageList:any=[];
  thePackage:any;
  packageType:any;
  constructor(public router: Router,public svc:PackagesService,public location:Location,private route: ActivatedRoute,public svc2:CommonTypeService)
  { }


  /*
  * Purpose : To get all vendor list and display it on browser
  * Author : Poonam K
  * Date : 20 -Jan -2019
  */
  ngOnInit()
  {

    //console.log(history.state);
    //alert(history.state);
    
    // this.route.queryParams.subscribe(params => {
    
    //   this.packageType= params['type'];
    //   alert(this.packageType)
    //   if(this.packageType!=undefined)
    //   {
    // this.svc.packageType=this.packageType;
    //   }
    
   
    
    
  // });
     this.svc.getAllPackages(this.svc2.type).subscribe((res)=>
     {
      
       this.packageList=res;
     })
  }

 /*
  * Purpose : To register new package
  * Author : Poonam K
  * Date : 29 -Jan -2019
  */ 
 NavigateToNew()
 {

     this.router.navigate(['createPackage']);
 }


 /*
 * Purpose : To delete existing package
 * Author : Poonam K
 * Date : 29 -Jan -2019
 */ 
 DeletePackage(id)
 {
   this.svc.deletePackageById(id).subscribe((res)=>
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
 * Purpose : To delete existing package
 * Author : Poonam K
 * Date : 29 -Jan -2019
 */ 
UpdatePackage(id)
{
     this.router.navigate(['/editPackage',id]);
}
}


