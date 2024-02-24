import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistsComponent } from './watchlists.component';

describe('WatchlistsComponent', () => {
  let component: WatchlistsComponent;
  let fixture: ComponentFixture<WatchlistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchlistsComponent]
    });
    fixture = TestBed.createComponent(WatchlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
