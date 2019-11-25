import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListaComponent } from './prod-lista.component';

describe('ProdListaComponent', () => {
  let component: ProdListaComponent;
  let fixture: ComponentFixture<ProdListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
