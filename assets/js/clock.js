var clockID;
//var yourTimeZoneFrom = +1.00; //time zone value where you are at

var d = new Date();  
//get the timezone offset from local time in minutes
var tzDifference = 60 + d.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offset = tzDifference * 60 * 1000;

function UpdateClock() {
  var tDate = new Date(new Date().getTime()+offset);
  var formatter;
  var day;
  var getDay;
  var getMonth;
  dayOfClock = tDate.getDate();
  var hourFormat = document.getElementById("hourFormat").checked ? false : true;
  //alert(hourFormat);

  if(window.timezone) {
    var options = {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12 : hourFormat
    }

    getDay = {
      timeZone : Intl.DateTimeFormat().resolvedOptions().timeZone,
      day: 'numeric'
    }

    getMonth = {
      timeZone : Intl.DateTimeFormat().resolvedOptions().timeZone,
      month: 'numeric'
    }

    formatter = new Intl.DateTimeFormat([],options);
    document.getElementById("clock").innerHTML = formatter.format(new Date()) + " " + options.timeZone;
  } else {
    if(window.jap){
      var options = {
        timeZone: 'Asia/Tokyo',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12 : hourFormat
      }

      getDay = {
        timeZone : 'Asia/Tokyo',
        day: 'numeric'
      }

      getMonth = {
        timeZone : 'Asia/Tokyo',
        month: 'numeric'
      }

      formatter = new Intl.DateTimeFormat([], options);

      document.getElementById("clock").innerHTML = formatter.format(new Date()) + " JST";
    } else {
      var options = {
        timeZone: 'Pacific/Pitcairn',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }

      getDay = {
        timeZone : 'Pacific/Pitcairn',
        day: 'numeric'
      }

      getMonth = {
        timeZone : 'Pacific/Pitcairn',
        month: 'numeric'
      }

      formatter = new Intl.DateTimeFormat([], options);

      document.getElementById("clock").innerHTML = formatter.format(new Date()) + " PST";
    }
  }

  day = new Intl.DateTimeFormat([],getDay).format();
  month = new Intl.DateTimeFormat([],getMonth).format();
  setToday(parseInt(month),parseInt(day));

}
function StartClock() {
   clockID = setInterval(UpdateClock, 500);
}

function KillClock() {
  clearTimeout(clockID);
}
window.onload=function() {
  StartClock();
  
}

function setToday(month,day){
   for(i=0;i<7;i++){
       var dayGet = $('#day'+(i+1)).text();            
       var monthGet = $("#month").text();
       if(day == dayGet && numberToMonth(month) == monthGet){
           $("#back" + (i+1)).css("background-color", "darkblue");
       } else {
           $("#back" + (i+1)).css("background-color", "rgb(27, 128, 205)");
       }
   } 
}

function numberToMonth(number) {
    var month;

    switch (number) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }

    return month;
}