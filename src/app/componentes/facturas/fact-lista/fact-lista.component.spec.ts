import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactListaComponent } from './fact-lista.component';

describe('FactListaComponent', () => {
  let component: FactListaComponent;
  let fixture: ComponentFixture<FactListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
