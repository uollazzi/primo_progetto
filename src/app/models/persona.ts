export interface Persona {
  nome: string;
  cognome: string;
  annoNascita: number;
  attivo: boolean;
  indirizzo: Indirizzo;
  indirizzi_spedizione: Indirizzo[]
}

export interface Indirizzo {
  via: string;
  civico: string;
  cap: number;
  localita: string;
  prov: string;
}

export interface Azienda {
  ragioneSociale: string;
  indirizzo: Indirizzo;
}
