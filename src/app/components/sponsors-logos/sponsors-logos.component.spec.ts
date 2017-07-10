import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SponsorsLogosComponent} from './sponsors-logos.component';

describe('SponsorsLogosComponent', () => {
  let component: SponsorsLogosComponent;
  let fixture: ComponentFixture<SponsorsLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorsLogosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
