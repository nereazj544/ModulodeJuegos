import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BricksBreakComponent } from './bricks-break.component';

describe('BricksBreakComponent', () => {
  let component: BricksBreakComponent;
  let fixture: ComponentFixture<BricksBreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BricksBreakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BricksBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
