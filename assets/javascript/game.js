


 $(document).ready(function() {

   var wins = 0;
   var losses = 0;
   var isCalculated = 0;

function image(){
   isCalculated = 0; // Players Total



  var randomNumber = Math.floor(Math.random()*100);
   // console.log(randomNumber)


$("#randomNumber").text(randomNumber);
$("#isCalculated").text(isCalculated);

$(".element").on("click", function() {
  // console.log("hello")
  // console.log(this)
 isCalculated  += parseInt($(this).attr("value"))
 // alert($(this).attr("value"))
 // alert(isCalculated)
 //
 // console.log(isCalculated)
 //  console.log($(this).attr("value"))



if (isCalculated === randomNumber) {
wins++;
$("#wins").html("<h2>" + wins + "</h2>");
alert("you win");
image();


}

if (isCalculated > randomNumber) {
  losses++;
  alert("try again you lose");
   $("#losses").html("<h2>" + losses +"</h2>")
   image();
}


$("#isCalculated").text(isCalculated);

});


}

image(); // Starts the game

});
