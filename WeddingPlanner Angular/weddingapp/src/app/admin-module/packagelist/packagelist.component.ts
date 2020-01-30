import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.css']
})
export class PackagelistComponent implements OnInit {

  packageList:any=[];
  thePackage:any;
  constructor(public router: Router,public svc:PackagesService)
  { }


  /*
  * Purpose : To get all vendor list and display it on browser
  * Author : Poonam K
  * Date : 20 -Jan -2019
  */
  ngOnInit()
  {

    console.log(history.state);
    alert(history.state);
    // this.svc.getAllPackages().subscribe((res)=>
    // {
    //   this.packageList=res;
    // })
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

