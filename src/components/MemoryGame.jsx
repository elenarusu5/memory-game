import { useState, useEffect } from 'react'
import _ from 'lodash'

import Card from './Card'
import Loader from './Loader'
import Information from './Information'
import EndGame from './EndGame'

import { fetchData } from '../thunks/photos'

const MemoryGame = () => {
  const [cards, setCards] = useState([])
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const [newGame, setNewGame] = useState(false)
  const [seconds, setSeconds] = useState(0)

  const matchedCards = cards?.filter(item => !!item.isMatched)
  const completedGame = !!matchedCards?.length && matchedCards?.length === cards?.length

  useEffect(() => {
    let timer = null
    if (!!newGame) {
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)
    }
    if (completedGame) {
      clearInterval(timer)
    }
    return () => {
      clearInterval(timer)
    }
  }, [newGame, completedGame])

  useEffect(() => {
    if (!!newGame) {
      fetchData().then((data) => {
        const pairCards = data?.concat(data).map((card, index) => ({
          ...card,
          uniqueId: index,
        }))
        const shuffledCards = _.shuffle(pairCards)
        setCards(shuffledCards)
      })
    }
  }, [newGame])

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.url === secondCard.url) {
        setCards((prevArray) => {
          return prevArray.map((item) => {
            if (item.url === firstCard.url
            ) {
              return { ...item, isMatched: true }
            } else {
              return item
            }
          })
        })

        removeSelection()
      } else {
        setTimeout(() => {
          removeSelection()
        }, 1000)
      }
    }
  }, [firstCard, secondCard])

  const removeSelection = () => {
    setFirstCard(null)
    setSecondCard(null)
  }

  const handleSelectedCard = (item) => {
    if (firstCard !== null && firstCard?.uniqueId !== item?.uniqueId) {
      setSecondCard(item)
    } else {
      setFirstCard(item)
    }
  }

  const handleNewGame = () => setNewGame(!newGame)

  const handleBack = () => {
    setNewGame(!newGame)
    setCards([])
    setSeconds(0)
  }

  const displayTime = () => {
    return (
      <>
        {seconds > 59
          ? Math.floor(seconds / 60) < 10
            ? `0${Math.floor(seconds / 60)}`
            : Math.floor(seconds / 60)
          : '00'}
        :
        {seconds % 60 < 10
          ? `0${seconds % 60}`
          : seconds % 60
        }
      </>
    )
  }

  return (
    <div className="main">
      <div className="d-flex justify-content-center">
        <div className="col-9 game d-flex justify-content-center align-items-center">
          {!newGame && !completedGame ? (
            <Information
              handleNewGame={handleNewGame} />
          )
            : !!completedGame
              ? <EndGame
                handleBack={handleBack}
                displayTime={displayTime}
                seconds={seconds}
              />
              : !!newGame && !cards?.length
                ? <Loader />
                : (
                  <div className="board">
                    {cards?.map((card, index) => {
                      return (
                        <Card
                          key={index}
                          card={card}
                          handleSelectedCard={() => handleSelectedCard(card)}
                          isFlipped={
                            card?.uniqueId === firstCard?.uniqueId ||
                            card?.uniqueId === secondCard?.uniqueId ||
                            !!card.isMatched
                          }
                        />
                      )
                    })}
                  </div>
                )}
        </div>
      </div>
    </div>
  )
}

export default MemoryGame