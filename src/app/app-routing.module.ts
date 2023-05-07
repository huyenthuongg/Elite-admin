import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { InfoOrdComponent } from './components/info-ord/info-ord.component';
import { InfoCusComponent } from './components/info-cus/info-cus.component';
import { InterImgComponent } from './components/inter-img/inter-img.component';
import { InterFooterComponent } from './components/inter-footer/inter-footer.component';
import { ProFabricsComponent } from './components/pro-fabrics/pro-fabrics.component';
import { ProColorsComponent } from './components/pro-colors/pro-colors.component';
import { BlogItlComponent } from './blog-itl/blog-itl.component';
import { BlogInsComponent } from './blog-ins/blog-ins.component';
const routes: Routes = [
  {path:'account', component:AccountsComponent},
  {path:'products', component:ProductsComponent},
  {path:'blog', component:BlogsComponent},
  {path:'order', component:InfoOrdComponent},
  {path:'customer', component:InfoCusComponent},
  {path:'image', component:InterImgComponent},
  {path:'footer', component:InterFooterComponent},
  {path:'fabrics', component:ProFabricsComponent},
  {path:'colors', component:ProColorsComponent},
  {path:'Elite-ITL', component:BlogItlComponent},
  {path:'Inspiration', component:BlogInsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  AccountsComponent,BlogsComponent,ProductsComponent
]
