import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarqueMotoComponent } from './add-marque-moto.component';

describe('AddMarqueMotoComponent', () => {
  let component: AddMarqueMotoComponent;
  let fixture: ComponentFixture<AddMarqueMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarqueMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarqueMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
