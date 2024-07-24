export interface rubricaModel {
  id: number;
  tipologia: boolean
  nome: string
  cognome: string
  ragioneSociale: string
  indirizzo: Indirizzo
  email: string
  telefono: string
  nascita: string
}

export interface Indirizzo {
  via: string
  civico: string
  provincia: string
  cap: string
  nazione: string
}
