export interface DocSuits {
  [key: string]: string
}

export interface DocRules {
  cardsPerPlayer: number
  state: string
  dealAll: boolean
  players: number
  deckType?: string
  dealer?: boolean
  lastCard?: string
}

export interface Doc52CardDeck {
  spades: string[]
  hearts: string[]
  clubs: string[]
  diamonds: string[]
}

export interface DocCard {
  symbol: string
  suit: string
  value: string
  state: string
  rules: DocRules
}

export interface DocHands {
  [player: string]: DocCard[]
}
