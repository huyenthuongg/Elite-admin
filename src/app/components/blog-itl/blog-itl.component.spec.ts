import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItlComponent } from './blog-itl.component';

describe('BlogItlComponent', () => {
  let component: BlogItlComponent;
  let fixture: ComponentFixture<BlogItlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogItlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogItlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
