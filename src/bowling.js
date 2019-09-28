'use strict'

function BowlingCard (){
  this.total = 0;
  this.frame = 1;
  this.pins1= 0;
  this.pins2 = 0;
  this.hitPins1;
  this.frameScore = 0
};

BowlingCard.prototype.roll1 = function(pins1){
  this.pins1 +=document.getElementById("firstRoll").value.parseInt;
  console.log(pins1);
  return this.pins1;
}
BowlingCard.prototype.roll2 = function(pins2){
  this.pins2 +=document.getElementById("secondRoll").value.parseInt;
  console.log(pins2);
  return this.pins2;
}

BowlingCard.prototype.frameTotal = function(pins, pins2){
return this.frameScore = this.pins1 + this.pins2;
}

BowlingCard.prototype.nextFrame = function(){
  this.frame++;
}


// BowlingCard.prototype.hitPins = function(){
//   return this.total+=pins;
// }
