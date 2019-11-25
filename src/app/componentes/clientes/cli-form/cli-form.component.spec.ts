import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliFormComponent } from './cli-form.component';

describe('CliFormComponent', () => {
  let component: CliFormComponent;
  let fixture: ComponentFixture<CliFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
