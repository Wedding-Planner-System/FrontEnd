import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  Name:string;
  Email:string;
  Message:string;

  constructor(public svc:ContactUsService) { }

  ngOnInit() {
  }
  saveContactUs()
  {
   
    this.svc.saveContactUs(this.Name,this.Email,this.Message).subscribe((res)=>{
    console.log(res);
     alert(res);
     
    })
  }

}
