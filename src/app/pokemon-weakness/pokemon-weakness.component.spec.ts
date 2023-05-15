import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonWeaknessComponent } from './pokemon-weakness.component';

describe('PokemonWeaknessComponent', () => {
  let component: PokemonWeaknessComponent;
  let fixture: ComponentFixture<PokemonWeaknessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonWeaknessComponent]
    });
    fixture = TestBed.createComponent(PokemonWeaknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
