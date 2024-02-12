import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeFormComponent } from './add-time-form.component';

describe('AddTimeFormComponent', () => {
  let component: AddTimeFormComponent;
  let fixture: ComponentFixture<AddTimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTimeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
