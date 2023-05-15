// export interface Pokemon {
//   id: string;
//   name: string;
//   supertype: string;
//   subtypes: string[];
//   level: string;
//   hp: string;
//   types: string[];
//   evolvesFrom: string;
//   abilities: Ability[];
//   attacks: Attack[];
// }

// export interface Ability {
//   name: string;
//   text: string;
//   type: string;
// }

// export interface Attack {
//   name: string;
//   cost: string[];
//   convertedEnergyCost: number;
//   damage: string;
//   text: string;
// }


export interface Pokemon {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  level: string
  hp: string
  types: string[]
  evolvesFrom?: string
  abilities?: Ability[]
  attacks: Attack[]
  weaknesses: Weakness[]
  resistances?: Resistance[]
  retreatCost: string[]
  convertedRetreatCost: number
  set: Set
  number: string
  artist: string
  rarity: string
  nationalPokedexNumbers: number[]
  legalities: Legalities2
  images: Images2
  tcgplayer: Tcgplayer
  cardmarket: Cardmarket
  flavorText?: string
}

export interface Ability {
  name: string
  text: string
  type: string
}

export interface Attack {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}

export interface Weakness {
  type: string
  value: string
}

export interface Resistance {
  type: string
  value: string
}

export interface Set {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: Images
}

export interface Legalities {
  unlimited: string
}

export interface Images {
  symbol: string
  logo: string
}

export interface Legalities2 {
  unlimited: string
}

export interface Images2 {
  small: string
  large: string
}

export interface Tcgplayer {
  url: string
  updatedAt: string
  prices: Prices
}

export interface Prices {
  holofoil: Holofoil
  reverseHolofoil: ReverseHolofoil
}

export interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number | null
}

export interface ReverseHolofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number | null
}

export interface Cardmarket {
  url: string
  updatedAt: string
  prices: Prices2
}

export interface Prices2 {
  averageSellPrice: number
  lowPrice: number
  trendPrice: number
  germanProLow: number
  suggestedPrice: number
  reverseHoloSell: number
  reverseHoloLow: number
  reverseHoloTrend: number
  lowPriceExPlus: number
  avg1: number
  avg7: number
  avg30: number
  reverseHoloAvg1: number
  reverseHoloAvg7: number
  reverseHoloAvg30: number
}
