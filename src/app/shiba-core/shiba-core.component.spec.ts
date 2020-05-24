import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShibaCoreComponent } from './shiba-core.component';

describe('ShibaCoreComponent', () => {
  let component: ShibaCoreComponent;
  let fixture: ComponentFixture<ShibaCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShibaCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShibaCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
