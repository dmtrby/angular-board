import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchboxToolbarComponent } from './searchbox-toolbar.component';

describe('SearchboxToolbarComponent', () => {
  let component: SearchboxToolbarComponent;
  let fixture: ComponentFixture<SearchboxToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchboxToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchboxToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
