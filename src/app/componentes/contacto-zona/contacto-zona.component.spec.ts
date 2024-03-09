import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoZonaComponent } from './contacto-zona.component';

describe('ContactoZonaComponent', () => {
  let component: ContactoZonaComponent;
  let fixture: ComponentFixture<ContactoZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
