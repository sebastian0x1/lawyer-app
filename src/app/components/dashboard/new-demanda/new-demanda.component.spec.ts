import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandaComponent } from './new-demanda.component';

describe('NewDemandaComponent', () => {
  let component: NewDemandaComponent;
  let fixture: ComponentFixture<NewDemandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDemandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
