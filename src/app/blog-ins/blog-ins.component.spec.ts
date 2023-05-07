import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInsComponent } from './blog-ins.component';

describe('BlogInsComponent', () => {
  let component: BlogInsComponent;
  let fixture: ComponentFixture<BlogInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogInsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
