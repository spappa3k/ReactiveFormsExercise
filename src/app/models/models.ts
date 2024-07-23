export interface rubricaModel {
  id: number
  tipologia: string
  nome: string
  cognome: string
  ragioneSociale: any
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
