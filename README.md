> This is a TypeScript module that handles a deck of cards.

# Install

With `npm`:

```
npm i --save git+ssh://git@github.com:belikemike/deck-of-cards.git
```

Or with `yarn`

```
yarn add ssh://git@github.com:belikemike/deck-of-cards.git
```

# Usage

```typescript
import { DeckOfCards } from 'deck-of-cards';
import { DocRules, DocCard } from 'deck-of-cards/types';

// setup a 7 card Gin Rummy with 4 players
const rules: DocRules = {
  // initial deal
  cardsPerPlayer: 7,
  // number of players
  players: 4,
  // initial state of cards 'face-down' | 'face-up'
  state: 'face-down'
};

// if rules object is provided, you get a fresh deck

const doc = new DeckOfCards(rules);

/** DoC Events
 * {
 *  CARD_DEALT,
 *  DEAL_END,
 *  DECK_END
 * }
 */

doc.subscribe.on(doc.EVENTS.CARD_DEALT, UICallback);

/**
 * this will create a hands object that uses 'player#'
 * for example, 4 players would look like this:
 * {
 *  player1: DocCard[],
 *  player2: DocCard[],
 *  player3: DocCard[],
 *  player4: DocCard[]
 * }
 */

const hands: DocHands = doc.deal();

// add the optional boolean to refresh the 'shuffled' deck
const deck: DocCard[] = doc.deck(true);


```

# Author

Mike Clagg — [mikeclagg.com](https://mikeclagg.com)
