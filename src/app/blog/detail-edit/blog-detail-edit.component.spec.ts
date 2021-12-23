import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailEditComponent } from './blog-detail-edit.component';

describe('BlogEditComponent', () => {
  let component: BlogDetailEditComponent;
  let fixture: ComponentFixture<BlogDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
