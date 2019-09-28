describe('updates score', function(){
  it('adds together rolls from Frame 1 when button is pushed', function(){
    game = new BowlingCard();
    game.hitPins(4)
    game.hitPins(3)
    expect(total).toEqual(7)
  })
})
