import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliListaComponent } from './cli-lista.component';

describe('CliListaComponent', () => {
  let component: CliListaComponent;
  let fixture: ComponentFixture<CliListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
