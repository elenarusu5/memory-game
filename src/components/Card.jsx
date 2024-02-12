import classnames from 'classnames'
import cardBadge from "../assets/images/card.png"

const Card = (props) => {
  const { card: { uniqueId, url, title, isMatched }, isFlipped, handleSelectedCard } = props

  return (
    <div
      id={uniqueId}
      className={classnames(
        "d-flex justify-content-center align-items-center memory-card",
        {
          "flip": isFlipped,
          "match": !!isMatched
        }
      )}
      onClick={handleSelectedCard}
    >
      <img className="front" src={url} alt={title} />
      <img className="back p-4" src={cardBadge} alt={'card'} />
    </div>
  )
}

export default Card