import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfoOrdComponent } from './components/info-ord/info-ord.component';
import { InfoCusComponent } from './components/info-cus/info-cus.component';
import { InterImgComponent } from './components/inter-img/inter-img.component';
import { InterFooterComponent } from './components/inter-footer/inter-footer.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProFabricsComponent } from './components/pro-fabrics/pro-fabrics.component';
import { ProColorsComponent } from './components/pro-colors/pro-colors.component';
import { BlogItlComponent } from './components/blog-itl/blog-itl.component';
import { BlogInsComponent } from './components/blog-ins/blog-ins.component';
@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    ProductsComponent,
    BlogsComponent,
    InfoOrdComponent,
    InfoCusComponent,
    InterImgComponent,
    InterFooterComponent,
    ProFabricsComponent,
    ProColorsComponent,
    BlogItlComponent,
    BlogInsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, ModalModule.forRoot(),TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
