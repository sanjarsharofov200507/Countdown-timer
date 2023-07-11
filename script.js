

const daysHead = document.querySelector('.days');
const hourHead = document.querySelector('.hours');
const minuteHead = document.querySelector('.minutes');
const secondHead = document.querySelector('.seconds');
const secondCard = document.querySelector('#second');
const minuteCard = document.querySelector('#minute');
const hourCard = document.querySelector('#hour');


let days;
let hours;
let minutes;
let seconds;

//

console.log(seconds);
var countDownDate = new Date ("Jan 1, 2024 00:00:00").getTime();

console.log(countDownDate);

var x = setInterval(function(){

//get today's date and time


var now = new Date().getTime();

// find the distance between now and future dates


var distance = countDownDate - now;

// time calculations for days , hours, minutes , and seconds


days = Math.floor(distance/(1000*60*60*24));
hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

minutes = Math.floor((distance % (1000*60*60))/(1000*60));

seconds= Math.floor((distance % (1000*60))/(1000));

daysHead.innerHTML = days;
hourHead.innerHTML = hours;
minuteHead.innerHTML = minutes;
secondHead.innerHTML = seconds;

secondHead.addEventListener('onChange',()=>{


secondCard.classList.add('active');

})

// if countdown is over


if(distance<0){
   
daysHead.innerText = "00";
hourHead.innerText = "00";
minuteHead.innerText = '00';
secondHead.innerText = '00';

}

},1000);


var y = setInterval(function(){


 secondCard.classList.toggle('active')

}, 1000);

var now = new Date().getTime();

// find the distance between now and the future date;

var distance = countDownDate-now;

//time calculations for days, hours, minutes and seconds


days = Math.floor(distance/(1000*60*60*24));
hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

minutes = Math.floor((distance % (1000*60*60))/(1000*60));

seconds= Math.floor((distance % (1000*60))/(1000));

console.log(minuteCard);

var a =  setInterval(function() {
    if (seconds<1) {minuteCard.classList.toggle('active')}
    
}, 1000);

var b =  setInterval(function() {
    if (minutes<1) {hourCard.classList.toggle('active')}
    
}, 1000);



