export interface Country {
  name: string,
  numericCode: string,
  alpha3Code: string,
  topLevelDomain: string[],
  capital: string,
  subregion: string,
  region: string,
  population: number,
  borders?: string[],
  nativeName: string,
  currencies: Currency[]
  languages: Language[],
  flags: {
    svg: string,
    png: string
  },
}

export interface Currency {
  code : string,
  name: string,
  symbol: string
}

export interface Language {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
}