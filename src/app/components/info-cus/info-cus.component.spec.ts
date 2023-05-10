import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCusComponent } from './info-cus.component';

describe('InfoCusComponent', () => {
  let component: InfoCusComponent;
  let fixture: ComponentFixture<InfoCusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
