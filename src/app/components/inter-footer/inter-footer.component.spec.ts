import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterFooterComponent } from './inter-footer.component';

describe('InterFooterComponent', () => {
  let component: InterFooterComponent;
  let fixture: ComponentFixture<InterFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
