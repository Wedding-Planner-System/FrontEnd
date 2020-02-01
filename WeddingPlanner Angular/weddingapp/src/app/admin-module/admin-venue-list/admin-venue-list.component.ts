import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from 'src/app/services/event-service.service';
import { VenuedataService } from 'src/app/services/venuedata.service';
import { CommonTypeService } from 'src/app/services/common-type.service';


@Component({
  selector: 'app-admin-venue-list',
  templateUrl: './admin-venue-list.component.html',
  styleUrls: ['./admin-venue-list.component.css']
})
export class AdminVenueListComponent implements OnInit {

  str:any;
  adminVenueList:any=[];
  theVenue:any;
  constructor(public svc:VenuedataService,public router:Router,public svc1 : CommonTypeService) { }

  ngOnInit() {
    this.svc.getAllVenue().subscribe((res)=>
    {
      this.adminVenueList=res;
      this.str=JSON.stringify(res);
     // alert(JSON.stringify(res));
    })
  }
  NavigateToNew()
  {

   this.svc1.type="Venue";
    this.router.navigate(['venueregister']);
  }

  DeleteVenue(id)
  {
  //  alert("hello")
    this.svc.deleteVenueById(id).subscribe((res)=>
    {
      
      if(res!=null)
      {
      alert("Record deleted Successfully");
      window.location.reload();
      }
      else{

      }
    })
  }
  UpdateVenue(id)
 {
      this.router.navigate(['/editVenue',id]);
 }
  

}
