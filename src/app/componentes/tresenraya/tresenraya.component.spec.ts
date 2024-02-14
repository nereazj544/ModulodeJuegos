import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresenrayaComponent } from './tresenraya.component';

describe('TresenrayaComponent', () => {
  let component: TresenrayaComponent;
  let fixture: ComponentFixture<TresenrayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresenrayaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresenrayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
