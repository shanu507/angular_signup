import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routeing';
  constructor(private router:Router) { }
  myhome() {
  	this.router.navigate(['/home']);
  }
  myangular() {
  	this.router.navigate(['/angular']);
  }
    aboutus() {
  	this.router.navigate(['/about-us']);
  }
    contactus() {
  	this.router.navigate(['/contact-us']);
  }
    mywebdesign() {
  	this.router.navigate(['/web-design']);
  }
    mycareer() {
  	this.router.navigate(['/career']);
  }
 }  
  	
