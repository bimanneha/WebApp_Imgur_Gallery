import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCardComponent } from './each-card.component';

describe('ImageCardComponent', () => {
  let component: EachCardComponent;
  let fixture: ComponentFixture<EachCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
