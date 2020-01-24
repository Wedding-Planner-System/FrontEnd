import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule,HttpClient } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { GallaryComponent } from './gallary/gallary.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VenueRegistrationComponent } from './venue-registration/venue-registration.component';
import { AuthGuard } from './guards/auth.guard';
import { NumbersOnlyDirective } from './Directives/numbers-only.directive';
import { WordsOnlyDirective } from './Directives/words-only.directive';
import { VenueListtComponent } from './venue-listt/venue-listt.component';
import { DateComponent } from './date/date.component';
import { EventregisterComponent } from './eventregister/eventregister.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent,
    LoginComponent,
    ContactUsComponent,
    AboutUsComponent,
    VendorRegistrationComponent,
    GallaryComponent,
    VendorListComponent,
    VenueRegistrationComponent,
    NumbersOnlyDirective,
    WordsOnlyDirective,
    VenueListtComponent,
    DateComponent,
    EventregisterComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          component:HomeComponent
        },
        {
          path:'home',
          component:HomeComponent

        },
        {
          path:'login',
          component:LoginComponent
        
        },
        {
          path:'admin',
          component:HomeComponent
        },
        {
          path:'contactus',
          component:ContactUsComponent
        },
        {
          path:'aboutus',
          component:AboutUsComponent
        },
        {
          path:'venueregister',
          component:VenueRegistrationComponent
        },
        {
          path:'gallary',
          component:GallaryComponent
        },
        {
          path:'vendorreg',
          component:VendorRegistrationComponent
        },
        {
          path:'vendorlist',
          component:VendorListComponent,
           canActivate : [AuthGuard] 
        },
        {
          path:'eventregister',
          component:EventregisterComponent
        },
        {
          path:'date',
          component:DateComponent
        },
        {
          path:'events',
          component:VenueListtComponent
        }
      ]
    )
   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 


 
}
