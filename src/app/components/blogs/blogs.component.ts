import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  modalRef?: BsModalRef;
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
}
export class ModalContentWithInterceptorComponent {
  constructor(public bsModalRef: BsModalRef) { }
}
