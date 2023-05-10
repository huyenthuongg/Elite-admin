import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterImgComponent } from './inter-img.component';

describe('InterImgComponent', () => {
  let component: InterImgComponent;
  let fixture: ComponentFixture<InterImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
