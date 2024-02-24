import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyWathclistComponent } from './empty-wathclist.component';

describe('EmptyWathclistComponent', () => {
  let component: EmptyWathclistComponent;
  let fixture: ComponentFixture<EmptyWathclistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyWathclistComponent]
    });
    fixture = TestBed.createComponent(EmptyWathclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
