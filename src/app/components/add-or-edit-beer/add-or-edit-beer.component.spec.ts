import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditBeerComponent } from './add-or-edit-beer.component';

describe('AddOrEditBeerComponent', () => {
  let component: AddOrEditBeerComponent;
  let fixture: ComponentFixture<AddOrEditBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
