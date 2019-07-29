import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarqueVoitureComponent } from './add-marque-voiture.component';

describe('AddMarqueVoitureComponent', () => {
  let component: AddMarqueVoitureComponent;
  let fixture: ComponentFixture<AddMarqueVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarqueVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarqueVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
