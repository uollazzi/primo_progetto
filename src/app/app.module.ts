import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonPreviewComponent } from './pokemon-preview/pokemon-preview.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CalciatoriListComponent } from './calciatori-list/calciatori-list.component';
import { CalciatorePreviewComponent } from './calciatore-preview/calciatore-preview.component';
import { ProdottiListComponent } from './prodotti-list/prodotti-list.component';
import { ProdottoPreviewComponent } from './prodotto-preview/prodotto-preview.component';
import { PersoneListComponent } from './persone-list/persone-list.component';
import { PokemonAttackComponent } from './pokemon-attack/pokemon-attack.component';
import { PokemonWeaknessComponent } from './pokemon-weakness/pokemon-weakness.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PokemonsComponent,
    PokemonPreviewComponent,
    PokemonListComponent,
    CalciatoriListComponent,
    CalciatorePreviewComponent,
    ProdottiListComponent,
    ProdottoPreviewComponent,
    PersoneListComponent,
    PokemonAttackComponent,
    PokemonWeaknessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
