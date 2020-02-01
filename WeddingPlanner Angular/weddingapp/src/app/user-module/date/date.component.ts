import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventregisterService } from 'src/app/services/eventregister.service';
import { CommonTypeService } from 'src/app/services/common-type.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  serviceId:any;
  selectedDate:any;
  constructor(public router:Router,public route:ActivatedRoute,public svc:EventregisterService,public svc1:CommonTypeService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      const id=+params.get('id');
      if(id)
      {
        this.serviceId=id;
      }
    })

  }

  NavigateToEventRegister()
  {

    
    // this.svc.checkForExistEvent(this.selectedDate).subscribe((res)=>
    // {
    //   alert(res);
    // })
    
    this.svc.dt=this.selectedDate;
    this.svc.serviceId=this.serviceId;
    this.router.navigate(['eventregister']);
  }
}
