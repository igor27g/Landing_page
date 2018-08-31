
// Set the date we're counting down to 
let countDownDate = new Date("Aug 18, 2028 23:50:00").getTime();

// Update the cound down every 1 second 

let countDownfunction = setInterval(function() {
	
// Get todays date and time 
let now = new Date().getTime();

// Find the distance between now an the cound down date 
let distance = countDownDate - now;
	
// Time calculations for days, hours, minutes and seconds 
	
let days = Math.floor(distance / (1000 * 60 * 60 *24));

let hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000* 60*60));
	
let minutes = Math.floor((distance % (1000 *60 *60)) / (1000 *60));
let seconds = Math.floor((distance % (1000*60)) / 1000);
	
	
// Output the result in an element with id="demo"

let adjustedDays = `${days < 10 ? '0' : ''}${days}d`;    
let adjustedHours = `${hours < 10 ? '0' : ''}${hours}h`;    
let adjustedMinutes = `${minutes < 10 ? '0' : ''}${minutes}m`
let adjustedSeconds =  `${seconds < 10 ? '0' : ''}${seconds}s`;
    
document.getElementById("demo").innerHTML = `${adjustedDays} ${adjustedHours} ${adjustedMinutes} ${adjustedSeconds}`;


// If the count down is over, write some text 
if (distance < 0) {
	clearInterval(countDownfunction);
	document.getElementById("demo").innerHTML = "EXPIRED";
}
},1000);
