import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-info-cus',
  templateUrl: './info-cus.component.html',
  styleUrls: ['./info-cus.component.css']
})
export class InfoCusComponent {
  message?: string;
  modalRef?: BsModalRef;
 bsModalRef?: BsModalRef;
 constructor(private modalService: BsModalService) {}
  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm1(): void {
    this.message = 'Confirmed Deleted';
    this.modalRef?.hide();
  }
  decline1(): void {
    this.message = 'Declined Deleted';
    this.modalRef?.hide();
  }
}
