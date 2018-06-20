
var randomNumber = Math.floor((Math.random() * 101) + 19);
var num1 = Math.floor(Math.random()*11+1)
var num2 = Math.floor(Math.random()*11+1)
var num3 = Math.floor(Math.random()*11+1)
var num4 = Math.floor(Math.random()*11+1)

var userTotal= 0; 
var wins= 0;
var losses = 0

$('#win-counter').text(wins);
$('#loss-counter').text(losses);
document.getElementById("random-num").innerHTML = randomNumber

 

$('#score').text(userTotal)

    


$("#one").on('click', function myFunction() {
    userTotal = userTotal + num1;
    $('#score').text(userTotal);

    if (userTotal === randomNumber){
        winner();
    } else if (userTotal > randomNumber)
        loser()

   console.log("New userTotal= " + userTotal);
   
})
$("#two").on('click', function myFunctionTwo() {
    userTotal = userTotal + num2;
    $('#score').text(userTotal); 

    if (userTotal === randomNumber){
        winner();
    } else if (userTotal > randomNumber)
        loser()


    console.log("New userTotal= " + userTotal);
   
})
$("#three").on('click', function myFunctionThree() {

    userTotal = userTotal + num3;
    $('#score').text(userTotal); 

    if (userTotal === randomNumber){
        winner();
    } else if (userTotal > randomNumber)
        loser()


    console.log("New userTotal= " + userTotal);
})
$("#four").on('click', function myFunctionFour() {

    userTotal = userTotal + num4;
    $('#score').text(userTotal); 

    if (userTotal === randomNumber){
        winner();
    } else if (userTotal > randomNumber)
        loser()


    console.log("New userTotal= " + userTotal);

})

function winner(){

alert(" Winner!");
wins++; 

$('#win-counter').text(wins);
reset();
}

function loser(){

alert (" Loser! ");
losses++;

$('#loss-counter').text(losses);
reset() 
} 

function reset(){
   userTotal= 0;
   
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    randomNumber = Math.floor((Math.random() * 101) + 19);
    document.getElementById("random-num").innerHTML = randomNumber
$('#score').text(userTotal);
    
} 

  

