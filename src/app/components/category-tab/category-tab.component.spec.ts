import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTabComponent } from './category-tab.component';

describe('CategoryTabComponent', () => {
  let component: CategoryTabComponent;
  let fixture: ComponentFixture<CategoryTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryTabComponent]
    });
    fixture = TestBed.createComponent(CategoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
