import {PokemonName} from "./pokemon-name";
import {PokemonBase} from "./pokemon-base";

export class PokemonId {
  public readonly id: number = 0;
  public readonly name: PokemonName = new PokemonName();
  public readonly type: string[] = [];
  public readonly base: PokemonBase = new PokemonBase();
}

