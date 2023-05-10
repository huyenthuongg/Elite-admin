import { Component,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-pro-colors',
  templateUrl: './pro-colors.component.html',
  styleUrls: ['./pro-colors.component.css']
})
export class ProColorsComponent {
  modalRef?: BsModalRef;
  message?: string;
  confirmModalRef?: BsModalRef;
  confirmResolve?: () => void;
  confirmReject?: () => void;
  bsModalRef?: BsModalRef;
  confirmPromise?: Promise<void>
  constructor(private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalWithInterceptor(confirmTemplate: TemplateRef<any>) {
    const closeInterceptor = () => {
      this.confirmPromise = new Promise((resolve, reject) => {
        this.confirmResolve = resolve;
        this.confirmReject = reject;
      });
      this.confirmModalRef = this.modalService.show(confirmTemplate, {class: 'modal-sm'});

      return this.confirmPromise;
    };
    this.bsModalRef = this.modalService.show(ModalContentWithInterceptorComponent, { closeInterceptor });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  confirm(): void {
    if (this.confirmResolve) {
      this.confirmResolve();
    }
    this.confirmModalRef?.hide();
  }
  decline(): void {
    if (this.confirmReject) {
      this.confirmReject();
    }
    this.confirmModalRef?.hide();
  }
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
export class ModalContentWithInterceptorComponent {
  constructor(public bsModalRef: BsModalRef) { }
}
