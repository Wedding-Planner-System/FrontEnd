import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  NavigateToEventRegister()
  {
    this.router.navigate(['eventregister']);
  }
}
