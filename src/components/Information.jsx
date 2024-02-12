const Information = ({ handleNewGame }) => {
  return (
    <div className="row mt-5">
      <h1 className="pt-3">Memory game</h1>

      <div className="mt-5">
        <p className="mb-2 fst-italic">*The player turns over any two cards (one at a time).</p>
        <p className="mb-2 fst-italic">*If the cards match, the player will keep them.</p>
        <p className="mb-2 fst-italic">*If the two cards do not match, those cards are turned face down again.</p>
        <p className="mb-2 fst-italic">*The trick is to remember which cards are where.</p>
        <p className="mb-2 fst-italic">*The game is completed when all the cards are matched.</p>
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <button type="button" className="col-3 py-2 btn btn-light" onClick={handleNewGame}>
          Start new game
        </button>
      </div>
    </div>
  )
}

export default Information