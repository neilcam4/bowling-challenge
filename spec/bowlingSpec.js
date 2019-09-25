describe('Bowling ScoreCard', function(){
  it('rolls 1 and 2 from round 1 do not exceed 10 points', function(){
let roll1 = {score:3};
let roll2 = {score:5};
var total = roll1['score'] + roll2['score']
    expect(total).toBeLessThan(11)
  })
  it('returns the value user input for roll 1', function(){

  })
})
