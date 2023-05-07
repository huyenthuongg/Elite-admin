import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProColorsComponent } from './pro-colors.component';

describe('ProColorsComponent', () => {
  let component: ProColorsComponent;
  let fixture: ComponentFixture<ProColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProColorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
