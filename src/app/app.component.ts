import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  // changeColor(text: string) {
  //   // Tắt màu sắc của các dòng văn bản khác
  //   document.querySelectorAll('.change-color').forEach((element) => {
  //     element.classList.remove('color-change');
  //   });
  //   // Thay đổi màu sắc của dòng văn bản được chọn
  //   this.selectedText = text;
  //   document.querySelector(`span[data-text="${text}"]`).classList.add('color-change');
  // }
}
