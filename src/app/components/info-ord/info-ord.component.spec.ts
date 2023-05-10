import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOrdComponent } from './info-ord.component';

describe('InfoOrdComponent', () => {
  let component: InfoOrdComponent;
  let fixture: ComponentFixture<InfoOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
