describe('Bowling ScoreCard', function(){
  it('returns current score of 0 when new card made', function(){
  var card = new BowlingCard();
  expect(card.total).toEqual(0)
  })
  it('adds together rolls from Frame 1 when button is pushed', function(){
    card = new BowlingCard();
    var pins1 =3;
    var pins2 = 4;
    

    card.frameTotal(pins1, pins2)
    expect(card.frameScore).toEqual(7)
  })
  // it('fetches score entered by user in roll1', function(){
  //   card = new BowlingCard();
  //   expect(card.roll1()).toEqual()
  //
  // })
})
