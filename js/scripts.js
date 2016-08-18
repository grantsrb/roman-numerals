//BUSINESS LOGIC
function Numeralize(numberIn) {
  var ones = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var hundos = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var thousands = ["", "M", "MM", "MMM"];
  var numOneIn = parseInt(numberIn.slice(-1, -1));
  var numTensIn = parseInt(numberIn.slice(-2, -1));
  var numHundosIn = parseInt(numberIn.slice(-3, -2));
  var numThousandsIn = parseInt(numberIn.slice(-4, -3));
  var numArray = [numOneIn, numTensIn, numHundosIn, numThousandsIn];
  for (index=0; index<numArray.length; index+=1) {
  	if (!numArray[index]) {
    	numArray[index]=0;
    }
  }
  return thousands[numArray[3]]+hundos[numArray[2]]+tens[numArray[1]]+ones[numArray[0]];
}

//UI LOGIC
$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = $("input#natural-number").val();
    var result = Numeralize(userInput);
    $("#output").text(result);
    event.preventDefault();
  });
});
