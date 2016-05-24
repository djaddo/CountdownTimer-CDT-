/*
Countdown Timer (CDT) is a really simple countdown timer which counts days, hours, minutes and seconds.
The script automatically converts days, hours, and minutes to seconds.. when you write them as an input to the given function;

The startTimer function gets those parameters:
startTimer(DAYS, HOURS, MINUTES, SECONDS)

You just have to add the following IDs to your html elements where you want to countdown numbers appear:

IDs => #days, #hours, #minutes, #seconds

Author: Adnan Halilovic
*/


function startTimer(daysInput, hoursInput, minutesInput, secondsInput) {
    // Converting inputs to seconds
    var daysConvert = daysInput * 86400;
    var hoursConvert = hoursInput * 3600;
    var minutesConvert = minutesInput * 60;

    // Assigning all converted inputs to the duration variable
    var duration = daysConvert + hoursConvert + minutesConvert + secondsInput;

    // Assigning variable duration to the variable timer
    var timer = duration;

    // Set interval to count every second and forward it to IDs
    setInterval(function () {
	  	days = ~~(timer / 86400);
			hours =~~((timer % 86400)/3600);
			minutes =~~((timer % 3600) / 60);
			seconds = timer % 60;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      if(timer>0){
        --timer;
      }
    }, 1000);
}
