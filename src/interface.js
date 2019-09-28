console.log('Hello')
var frame = 1;
function score(){
  var roll1 = document.getElementById("firstRoll").value;
  console.log(roll1);

  var roll2 = document.getElementById("secondRoll").value;
  console.log(roll2);
  var newTotal =  parseInt(roll1) + parseInt(roll2);

  document.getElementById("total").innerHTML = newTotal;
  console.log(newTotal)
  frame ++;
  console.log(frame)

}

function nextframe(){
var frame =2;
  if(frame ==2){
    document.getElementById("calculateScore1").visibility = "visible";
  }
}
