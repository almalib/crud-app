import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMembersComponent } from './list-of-members.component';

describe('ListOfEmployeesComponent', () => {
  let component: ListOfMembersComponent;
  let fixture: ComponentFixture<ListOfMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
