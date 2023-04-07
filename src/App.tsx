import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

interface ICard {
  id: number
  value: number
  isOpened: boolean;
  done: boolean;
}

export const cards: ICard[] = [
  {
    id: 0,
    value: 1,
    isOpened: false,
    done: false
  },
  {
    id: 1,
    value: 1,
    isOpened: false,
    done: false

  },
  {
    id: 2,
    value: 2,
    isOpened: false,
    done: false

  },
  {
    id: 3,
    value: 2,
    isOpened: false,
    done: false

  },
  {
    id: 4,
    value: 3,
    isOpened: false,
    done: false

  },
  {
    id: 5,
    value: 3,
    isOpened: false,
    done: false

  },
  {
    id: 6,
    value: 4,
    isOpened: false,
    done: false

  },
  {
    id: 7,
    value: 4,
    isOpened: false,
    done: false

  },
]

function App() {
  const [cardsList, setCardsList] = useState(cards)
  const [selectedCard, setSelectedCard] = useState<null | ICard>(null)

  const handleCardClick = (card: ICard) => {
    setSelectedCard(card)

    setCardsList(cardsList.map((cardItem) => {
      if (card.id === cardItem.id) {
        return {...cardItem, isOpened: true  }

      }
      return cardItem
    }))
    
    if (card.value === selectedCard?.value && card.id !== selectedCard.id) {
      setCardsList(cardsList.map((cardItem) => {
        if (cardItem.value === selectedCard.value){

          return { ...cardItem, done: true }
        }
        return cardItem
      }))
      setSelectedCard(null)
    }

    if (selectedCard && card.value !== selectedCard?.value) {
      setCardsList(cardsList.map((cardItem) => {
          return { ...cardItem, isOpened: false }
      }))
      setSelectedCard(null)
    }

  }
  return (
    <div className="App">
      <div className='card-board'>
      {cardsList.map((card, i) => {
        return (
          <Card key={i} done={card.done} onClick={() => handleCardClick(card)} isOpened={card.isOpened} id={card.id} value={card.value} />
        )
      })}
      </div>
    </div>
  );
}

export default App;
