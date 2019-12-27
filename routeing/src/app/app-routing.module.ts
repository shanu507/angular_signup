import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ProductsComponent } from './products/products.component';
import { AngularComponent } from './angular/angular.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   // {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component:HomeComponent},
   {path:'products',
     children:[
       {path:'',component:ProductsComponent},
       {path:'html',component:HtmlComponent},
       {path:'css',component:CssComponent},
       {path:'bootstrap',component:BootstrapComponent},
     ],
    },
   {path:'angular',
    children:[
       {path:'',component:AngularComponent},
       {path:'html',component:HtmlComponent},
       {path:'css',component:CssComponent},
       {path:'bootstrap',component:BootstrapComponent},
    ],
   },
   {path:'web-design',component:WebDesignComponent},
   {path:'contact-us',component:ContactUsComponent},
   {path:'about-us',component:AboutUsComponent},
   {path:'career',component:CareerComponent}
   // {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



