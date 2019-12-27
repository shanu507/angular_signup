import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { AngularComponent } from './angular/angular.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { CareerComponent } from './career/career.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutUsComponent,
    WebDesignComponent,
    AngularComponent,
    ContactUsComponent,
    HeaderComponent,
    CareerComponent,
    PagenotfoundComponent,
    HtmlComponent,
    CssComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
