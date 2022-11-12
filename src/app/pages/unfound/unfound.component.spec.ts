import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfoundComponent } from './unfound.component';

describe('UnfoundComponent', () => {
  let component: UnfoundComponent;
  let fixture: ComponentFixture<UnfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
