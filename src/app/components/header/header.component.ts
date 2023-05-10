import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'EliteAdmin';
  router: any;
  public product : boolean = true;
  public blog : boolean = true;
  public info : boolean = true;
  public inter : boolean = true;
  showsubpro(){
    this.product=true;
    this.blog = false;
  this.info = false;
  this.inter = false;
  }
  showsubblog(){
    this.blog=true;
    this.product=false;
    this.info = false;
      this.inter = false;
  }
  showsubinfo(){
    this.info=true;
    this.blog=false;
    this.product=false;
  this.inter = false;
  }
  showsubinter(){
    this.inter=true;
    this.product=false;
    this.blog = false;
  this.info = false;
  }
  selectedText: string = '';
  isChange: boolean = false;
}
