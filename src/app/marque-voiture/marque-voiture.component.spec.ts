import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueVoitureComponent } from './marque-voiture.component';

describe('MarqueVoitureComponent', () => {
  let component: MarqueVoitureComponent;
  let fixture: ComponentFixture<MarqueVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
