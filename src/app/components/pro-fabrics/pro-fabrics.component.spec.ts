import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProFabricsComponent } from './pro-fabrics.component';

describe('ProFabricsComponent', () => {
  let component: ProFabricsComponent;
  let fixture: ComponentFixture<ProFabricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProFabricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProFabricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
