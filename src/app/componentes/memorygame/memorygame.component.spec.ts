import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorygameComponent } from './memorygame.component';

describe('MemorygameComponent', () => {
  let component: MemorygameComponent;
  let fixture: ComponentFixture<MemorygameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemorygameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemorygameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
