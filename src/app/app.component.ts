import { Component } from '@angular/core';
import {PokemonId} from "./models/pokemon-id";
import {PokemonService} from "./servicies/pokemon-service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private readonly pokemon: PokemonService = new PokemonService();


  public isDesending: boolean = true;
  private _page: number = 1;
  public group: string = "";

  get names(): PokemonId[] {
    return this.pokemon.getAllPokemons(this.isDesending , this.page, this.group);
  };
  get types(): string[] {
    return this.pokemon.getAllTypes();
  };
  set page(page: number) {
    if (page >= 1 && page <= this.pokemon.allpokemons.length / 10) {
      this._page = page;
    }
  }
  get page(): number {
    return this._page;
  }
  get maxPage(): number {
    return this.pokemon.getPageCount(this.group);
  }



  }
