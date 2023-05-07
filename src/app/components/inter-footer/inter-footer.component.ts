import { Component } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-inter-footer',
  templateUrl: './inter-footer.component.html',
  styleUrls: ['./inter-footer.component.css']
})
export class InterFooterComponent {
  value?: string;
  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }
}
