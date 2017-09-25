import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobNavComponent } from './mob-nav.component';

describe('MobNavComponent', () => {
  let component: MobNavComponent;
  let fixture: ComponentFixture<MobNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
