import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  venueId:any;
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      const id=+params.get('id');
      if(id)
      {
        this.venueId=id;
      }
    })

  }

  NavigateToEventRegister()
  {
    this.router.navigate(['eventregister']);
  }
}
