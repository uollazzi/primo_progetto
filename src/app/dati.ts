import { Calciatore } from "./models/calciatore";
import { Pokemon } from "./models/pokemon";
import { Prodotto } from "./models/prodotto";

export let CALCIATORI: Calciatore[] = [
  {
    nome: "Francesco Totti",
    numero: 10,
    piede: "destro"
  },
  {
    nome: "Roberto Baggio",
    numero: 10,
    piede: "destro"
  },
  {
    nome: "Roberto Carlos",
    numero: 3,
    piede: "sinistro"
  },
  {
    nome: "Ismael Benacer",
    numero: 4,
    piede: "sinistro"
  }
];

export let PRODOTTI: Prodotto[] = [
  {
    id: 1,
    nome: "Bici",
    prezzo: 120
  },
  {
    id: 2,
    nome: "Salame",
    prezzo: 10
  }
]

export let POKEMONS: Pokemon[] = [
  {
    "id": "pl1-1",
    "name": "Ampharos",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2"
    ],
    "level": "57",
    "hp": "130",
    "types": [
      "Lightning"
    ],
    "evolvesFrom": "Flaaffy",
    "abilities": [
      {
        "name": "Damage Bind",
        "text": "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
        "type": "Poké-Body"
      }
    ],
    "attacks": [
      {
        "name": "Gigavolt",
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30+",
        "text": "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed."
      },
      {
        "name": "Reflect Energy",
        "cost": [
          "Lightning",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "70",
        "text": "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon."
      }
    ],
    "weaknesses": [
      {
        "type": "Fighting",
        "value": "+30"
      },
      {
        "type": "Nutella",
        "value": "+60"
      }
    ],
    "resistances": [
      {
        "type": "Metal",
        "value": "-20"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "1",
    "artist": "Atsuko Nishida",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      181
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/1.png",
      "large": "https://images.pokemontcg.io/pl1/1_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-1",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 4.1,
          "mid": 5.33,
          "high": 9.66,
          "market": 10.73,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 3.95,
          "mid": 6.91,
          "high": 13.91,
          "market": 9.96,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-1",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 3.13,
        "lowPrice": 0.15,
        "trendPrice": 2.51,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 1.75,
        "reverseHoloLow": 0.15,
        "reverseHoloTrend": 3.23,
        "lowPriceExPlus": 1.49,
        "avg1": 1.25,
        "avg7": 3.62,
        "avg30": 3.1,
        "reverseHoloAvg1": 1.75,
        "reverseHoloAvg7": 2.83,
        "reverseHoloAvg30": 2.49
      }
    }
  },
  {
    "id": "pl1-2",
    "name": "Blastoise",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2"
    ],
    "level": "60",
    "hp": "130",
    "types": [
      "Water"
    ],
    "evolvesFrom": "Wartortle",
    "abilities": [
      {
        "name": "Dig Well",
        "text": "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose as many Water Energy cards as you like, and attach them to your Pokémon in any way you like. Discard the other cards. This power can't be used if Blastoise is affected by a Special Condition.",
        "type": "Poké-Power"
      }
    ],
    "attacks": [
      {
        "name": "Aqua Press",
        "cost": [
          "Water",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "20+",
        "text": "Does 20 damage plus 10 more damage for each Energy attached to all Pokémon (both yours and your opponent's)."
      },
      {
        "name": "Double Launcher",
        "cost": [
          "Water",
          "Water",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "",
        "text": "Discard 2 Energy attached to Blastoise. Choose 2 of your opponent's Benched Pokémon. This attack does 60 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Blastoise can't use Double Launcher during your next turn."
      }
    ],
    "weaknesses": [
      {
        "type": "Lightning",
        "value": "+30"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "2",
    "artist": "Kagemaru Himeno",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      9
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/2.png",
      "large": "https://images.pokemontcg.io/pl1/2_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-2",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 9.49,
          "mid": 13.09,
          "high": 20.24,
          "market": 21.4,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 11.75,
          "mid": 15.0,
          "high": 27.05,
          "market": 22.58,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-2",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 7.36,
        "lowPrice": 0.25,
        "trendPrice": 4.81,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 7.98,
        "reverseHoloLow": 0.25,
        "reverseHoloTrend": 7.17,
        "lowPriceExPlus": 4.28,
        "avg1": 4.0,
        "avg7": 7.99,
        "avg30": 7.34,
        "reverseHoloAvg1": 9.9,
        "reverseHoloAvg7": 7.26,
        "reverseHoloAvg30": 6.24
      }
    }
  },
  {
    "id": "pl1-3",
    "name": "Blaziken",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2"
    ],
    "level": "59",
    "hp": "130",
    "types": [
      "Fire"
    ],
    "evolvesFrom": "Combusken",
    "abilities": [
      {
        "name": "Fire Breath",
        "text": "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. That Pokémon is now Burned. This power can't be used if Blaziken is affected by a Special Condition.",
        "type": "Poké-Power"
      }
    ],
    "attacks": [
      {
        "name": "Clutch",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "40",
        "text": "The Defending Pokémon can't retreat during your opponent's next turn."
      },
      {
        "name": "Fire Spin",
        "cost": [
          "Fire",
          "Fire",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "100",
        "text": "Discard 2 Energy attached to Blaziken."
      }
    ],
    "weaknesses": [
      {
        "type": "Water",
        "value": "+30"
      }
    ],
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "3",
    "artist": "Hajime Kusajima",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      257
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/3.png",
      "large": "https://images.pokemontcg.io/pl1/3_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-3",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 3.77,
          "mid": 5.99,
          "high": 9.32,
          "market": 8.0,
          "directLow": 7.99
        },
        "reverseHolofoil": {
          "low": 2.0,
          "mid": 3.25,
          "high": 7.19,
          "market": 4.45,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-3",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 3.45,
        "lowPrice": 0.36,
        "trendPrice": 2.92,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 2.24,
        "reverseHoloLow": 0.4,
        "reverseHoloTrend": 2.44,
        "lowPriceExPlus": 2.0,
        "avg1": 2.5,
        "avg7": 2.93,
        "avg30": 2.6,
        "reverseHoloAvg1": 2.0,
        "reverseHoloAvg7": 2.97,
        "reverseHoloAvg30": 2.94
      }
    }
  },
  {
    "id": "pl1-4",
    "name": "Delcatty",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 1"
    ],
    "level": "53",
    "hp": "90",
    "types": [
      "Colorless"
    ],
    "evolvesFrom": "Skitty",
    "abilities": [
      {
        "name": "Power Circulation",
        "text": "Once during your turn (before your attack), you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put those cards on top of your deck in any order. If you do, put 2 damage counters on Delcatty. This power can't be used if Delcatty is affected by a Special Condition.",
        "type": "Poké-Power"
      }
    ],
    "attacks": [
      {
        "name": "Power Heal",
        "cost": [
          "Colorless"
        ],
        "convertedEnergyCost": 1,
        "damage": "10+",
        "text": "Does 10 damage plus 10 more damage for each damage counter on Delcatty. Then, remove 2 damage counters from Delcatty."
      },
      {
        "name": "Rear Kick",
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "60",
        "text": ""
      }
    ],
    "weaknesses": [
      {
        "type": "Fighting",
        "value": "+20"
      }
    ],
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "4",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      301
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/4.png",
      "large": "https://images.pokemontcg.io/pl1/4_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-4",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 2.92,
          "mid": 4.32,
          "high": 9.29,
          "market": 4.65,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 1.95,
          "mid": 2.98,
          "high": 7.95,
          "market": 7.95,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-4",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 2.29,
        "lowPrice": 0.5,
        "trendPrice": 2.41,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 2.4,
        "reverseHoloLow": 0.6,
        "reverseHoloTrend": 1.8,
        "lowPriceExPlus": 0.5,
        "avg1": 2.52,
        "avg7": 2.41,
        "avg30": 2.18,
        "reverseHoloAvg1": 1.0,
        "reverseHoloAvg7": 1.75,
        "reverseHoloAvg30": 1.86
      }
    }
  },
  {
    "id": "pl1-5",
    "name": "Dialga",
    "supertype": "Pokémon",
    "subtypes": [
      "Basic"
    ],
    "level": "72",
    "hp": "100",
    "types": [
      "Metal"
    ],
    "abilities": [
      {
        "name": "Reverse Time",
        "text": "Once during your turn, when you put Dialga from your hand onto your Bench, you may search your discard pile for up to 3 in any combination of Pokémon (excluding Pokémon LV.X) and basic Energy cards. Show them to your opponent and put them on top of your deck in any order.",
        "type": "Poké-Power"
      }
    ],
    "attacks": [
      {
        "name": "Time-Space Traveling",
        "cost": [
          "Metal",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "50",
        "text": "Draw cards until you have 7 cards in your hand."
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ],
    "resistances": [
      {
        "type": "Psychic",
        "value": "-20"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "5",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare Holo",
    "flavorText": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
    "nationalPokedexNumbers": [
      483
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/5.png",
      "large": "https://images.pokemontcg.io/pl1/5_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-5",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 3.98,
          "mid": 8.99,
          "high": 39.97,
          "market": 11.38,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 3.37,
          "mid": 3.87,
          "high": 6.59,
          "market": 5.99,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-5",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 3.97,
        "lowPrice": 0.25,
        "trendPrice": 2.16,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 4.95,
        "reverseHoloLow": 0.25,
        "reverseHoloTrend": 3.56,
        "lowPriceExPlus": 2.0,
        "avg1": 7.0,
        "avg7": 3.91,
        "avg30": 8.98,
        "reverseHoloAvg1": 4.95,
        "reverseHoloAvg7": 4.15,
        "reverseHoloAvg30": 2.28
      }
    }
  },
  {
    "id": "pl1-6",
    "name": "Dialga",
    "supertype": "Pokémon",
    "subtypes": [
      "Basic"
    ],
    "level": "70",
    "hp": "100",
    "types": [
      "Metal"
    ],
    "abilities": [
      {
        "name": "Time Aura",
        "text": "As long as Dialga is your Active Pokémon, your opponent can't play any Pokémon from his or her hand to evolve his or her Active Pokémon.",
        "type": "Poké-Body"
      }
    ],
    "attacks": [
      {
        "name": "Metal Burn",
        "cost": [
          "Metal",
          "Metal",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "100",
        "text": "Discard all Metal Energy attached to Dialga."
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "+20"
      }
    ],
    "resistances": [
      {
        "type": "Psychic",
        "value": "-20"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "6",
    "artist": "Kouki Saitou",
    "rarity": "Rare Holo",
    "flavorText": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
    "nationalPokedexNumbers": [
      483
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/6.png",
      "large": "https://images.pokemontcg.io/pl1/6_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-6",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 2.0,
          "mid": 5.05,
          "high": 17.0,
          "market": 4.65,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 1.9,
          "mid": 3.2,
          "high": 6.39,
          "market": 2.14,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-6",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 3.47,
        "lowPrice": 0.5,
        "trendPrice": 4.26,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 4.24,
        "reverseHoloLow": 0.5,
        "reverseHoloTrend": 2.48,
        "lowPriceExPlus": 2.5,
        "avg1": 0.98,
        "avg7": 3.54,
        "avg30": 3.94,
        "reverseHoloAvg1": 2.99,
        "reverseHoloAvg7": 2.44,
        "reverseHoloAvg30": 3.03
      }
    }
  },
  {
    "id": "pl1-7",
    "name": "Dialga G",
    "supertype": "Pokémon",
    "subtypes": [
      "Basic",
      "SP"
    ],
    "level": "79",
    "hp": "100",
    "types": [
      "Metal"
    ],
    "attacks": [
      {
        "name": "Deafen",
        "cost": [
          "Metal",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "10",
        "text": "Your opponent can't play any Trainer cards or Stadium cards from his or her hand during your opponent's next turn."
      },
      {
        "name": "Second Strike",
        "cost": [
          "Metal",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "50+",
        "text": "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 50 damage plus 20 more damage."
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ],
    "resistances": [
      {
        "type": "Psychic",
        "value": "-20"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "7",
    "artist": "Yusuke Ishikawa",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      483
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/7.png",
      "large": "https://images.pokemontcg.io/pl1/7_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-7",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 1.49,
          "mid": 4.45,
          "high": 8.97,
          "market": 9.02,
          "directLow": 4.38
        },
        "reverseHolofoil": {
          "low": 3.95,
          "mid": 4.72,
          "high": 99.99,
          "market": 6.25,
          "directLow": 4.72
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-7",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 2.92,
        "lowPrice": 0.4,
        "trendPrice": 3.69,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 2.3,
        "reverseHoloLow": 1.33,
        "reverseHoloTrend": 2.89,
        "lowPriceExPlus": 2.5,
        "avg1": 2.0,
        "avg7": 2.98,
        "avg30": 3.74,
        "reverseHoloAvg1": 1.35,
        "reverseHoloAvg7": 3.36,
        "reverseHoloAvg30": 2.98
      }
    }
  },
  {
    "id": "pl1-8",
    "name": "Gardevoir",
    "supertype": "Pokémon",
    "subtypes": [
      "Stage 2"
    ],
    "level": "61",
    "hp": "120",
    "types": [
      "Psychic"
    ],
    "evolvesFrom": "Kirlia",
    "abilities": [
      {
        "name": "Psychic Connect",
        "text": "As often as you like during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
        "type": "Poké-Power"
      }
    ],
    "attacks": [
      {
        "name": "Energy Burst",
        "cost": [
          "Psychic"
        ],
        "convertedEnergyCost": 1,
        "damage": "20+",
        "text": "Does 20 damage plus 10 more damage for each Energy attached to Gardevoir and the Defending Pokémon."
      },
      {
        "name": "Psychic Protection",
        "cost": [
          "Psychic",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "60",
        "text": "Gardevoir has no Weakness during your opponent's next turn."
      }
    ],
    "weaknesses": [
      {
        "type": "Psychic",
        "value": "+30"
      }
    ],
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "8",
    "artist": "Kouki Saitou",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      282
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/8.png",
      "large": "https://images.pokemontcg.io/pl1/8_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-8",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 3.02,
          "mid": 5.11,
          "high": 9.99,
          "market": 8.67,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 3.41,
          "mid": 8.6,
          "high": 15.99,
          "market": 7.77,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-8",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 1.81,
        "lowPrice": 0.09,
        "trendPrice": 1.76,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 15.0,
        "reverseHoloLow": 0.44,
        "reverseHoloTrend": 3.9,
        "lowPriceExPlus": 0.8,
        "avg1": 0.9,
        "avg7": 1.18,
        "avg30": 1.68,
        "reverseHoloAvg1": 15.0,
        "reverseHoloAvg7": 3.69,
        "reverseHoloAvg30": 2.36
      }
    }
  },
  {
    "id": "pl1-9",
    "name": "Giratina",
    "supertype": "Pokémon",
    "subtypes": [
      "Basic"
    ],
    "level": "55",
    "hp": "100",
    "types": [
      "Psychic"
    ],
    "abilities": [
      {
        "name": "Let Loose",
        "text": "Once during your turn, when you put Giratina from your hand onto your Bench, you may use this power. Each player shuffles his or her hand into his or her deck and draws up to 4 cards. (You draw your cards first.)",
        "type": "Poké-Power"
      }
    ],
    "attacks": [
      {
        "name": "Earth Power",
        "cost": [
          "Psychic",
          "Psychic",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "60",
        "text": "Flip 2 coins. This attack does 10 damage times the number of heads to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
      }
    ],
    "weaknesses": [
      {
        "type": "Darkness",
        "value": "×2"
      }
    ],
    "resistances": [
      {
        "type": "Colorless",
        "value": "-20"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "9",
    "artist": "Kouki Saitou",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      487
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/9.png",
      "large": "https://images.pokemontcg.io/pl1/9_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-9",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 6.9,
          "mid": 7.42,
          "high": 14.99,
          "market": 9.41,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 4.4,
          "mid": 7.46,
          "high": 10.99,
          "market": 8.26,
          "directLow": null
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-9",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 5.32,
        "lowPrice": 0.6,
        "trendPrice": 4.58,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 6.0,
        "reverseHoloLow": 0.79,
        "reverseHoloTrend": 4.58,
        "lowPriceExPlus": 3.0,
        "avg1": 6.0,
        "avg7": 5.16,
        "avg30": 3.73,
        "reverseHoloAvg1": 2.0,
        "reverseHoloAvg7": 4.77,
        "reverseHoloAvg30": 3.66
      }
    }
  },
  {
    "id": "pl1-10",
    "name": "Giratina",
    "supertype": "Pokémon",
    "subtypes": [
      "Basic"
    ],
    "level": "63",
    "hp": "100",
    "types": [
      "Psychic"
    ],
    "attacks": [
      {
        "name": "Over Slash",
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "",
        "text": "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon)."
      },
      {
        "name": "Dark Wing Flaps",
        "cost": [
          "Psychic",
          "Psychic"
        ],
        "convertedEnergyCost": 2,
        "damage": "20",
        "text": "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck."
      },
      {
        "name": "Wrack Down",
        "cost": [
          "Psychic",
          "Colorless",
          "Colorless"
        ],
        "convertedEnergyCost": 3,
        "damage": "60",
        "text": ""
      }
    ],
    "weaknesses": [
      {
        "type": "Darkness",
        "value": "×2"
      }
    ],
    "resistances": [
      {
        "type": "Colorless",
        "value": "-20"
      }
    ],
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "set": {
      "id": "pl1",
      "name": "Platinum",
      "series": "Platinum",
      "printedTotal": 127,
      "total": 133,
      "legalities": {
        "unlimited": "Legal"
      },
      "ptcgoCode": "PL",
      "releaseDate": "2009/02/11",
      "updatedAt": "2020/08/14 09:35:00",
      "images": {
        "symbol": "https://images.pokemontcg.io/pl1/symbol.png",
        "logo": "https://images.pokemontcg.io/pl1/logo.png"
      }
    },
    "number": "10",
    "artist": "Hajime Kusajima",
    "rarity": "Rare Holo",
    "nationalPokedexNumbers": [
      487
    ],
    "legalities": {
      "unlimited": "Legal"
    },
    "images": {
      "small": "https://images.pokemontcg.io/pl1/10.png",
      "large": "https://images.pokemontcg.io/pl1/10_hires.png"
    },
    "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/pl1-10",
      "updatedAt": "2023/05/11",
      "prices": {
        "holofoil": {
          "low": 7.58,
          "mid": 10.72,
          "high": 14.49,
          "market": 18.7,
          "directLow": null
        },
        "reverseHolofoil": {
          "low": 4.99,
          "mid": 8.39,
          "high": 12.75,
          "market": 9.77,
          "directLow": 12.75
        }
      }
    },
    "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/pl1-10",
      "updatedAt": "2023/05/11",
      "prices": {
        "averageSellPrice": 10.75,
        "lowPrice": 0.75,
        "trendPrice": 9.71,
        "germanProLow": 0.0,
        "suggestedPrice": 0.0,
        "reverseHoloSell": 6.67,
        "reverseHoloLow": 0.99,
        "reverseHoloTrend": 7.08,
        "lowPriceExPlus": 5.0,
        "avg1": 18.0,
        "avg7": 10.64,
        "avg30": 6.3,
        "reverseHoloAvg1": 8.0,
        "reverseHoloAvg7": 7.31,
        "reverseHoloAvg30": 5.56
      }
    }
  }
];
