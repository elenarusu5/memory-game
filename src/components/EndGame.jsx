const EndGame = ({ handleBack, displayTime, seconds }) => {
  return (
    <div className="mt-5">
      <h1 className='pt-3'>Awesome!!!</h1>
      <p className='my-5'>You matched all the cards in {displayTime()} {seconds < 59 ? 'seconds' : 'minutes'}</p>
      <button type="button" className="col-3 py-2 btn btn-light" onClick={handleBack}>
        Back
      </button>
    </div>
  )
}

export default EndGame