import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbauchComponent } from './embauch.component';

describe('EmbauchComponent', () => {
  let component: EmbauchComponent;
  let fixture: ComponentFixture<EmbauchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbauchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbauchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
