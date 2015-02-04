****************************************
         ======TO-DO LIST======
****************************************

1. Make a daily forecast similar to the hourly forecast

2. Make toggle button close the other container before opening its own

function toggle1(){
    $('#clickme-1').click(function() {
        if ($(".widget .container-3").x;") {
            $('.widget .container-3').slideToggle();
        }else{
            $('.widget .container-2').slideToggle();}
    });
}

function toggle2(){
    $('#clickme-2').click(function() {
        if ($(".widget .container-2").css("display") = "block") {
            $('.widget .container-2').slideToggle();
        }else{
            $('.widget .container-3').slideToggle();}
    });
}

3. Make a day and night widget depending on time of the day

.widget {
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
    font-family: Georgia, sans-serif;
    background: radial-gradient(#d1d1d1, #000);
    border-radius: 25px;
    }

and 

.widget .columns {
    height: 135px;
    width: 135px;
    float: left;
    margin-left: 20px;
    margin-top: 1rem;
    /*background: rgba(64, 106, 172, 0.19);*/
    border-radius: 50%;
    background: linear-gradient(#3b6389, #000);
    border: 2px solid #7e7e7e
    };

$(document).ready(function(){
var newD = new Date();
	var n = newD.getHours();
	if (n > 19 || n < 7)
	  // If time is after 7PM or before 7AM, apply night theme to ‘columns’
	  document.div.className = "night";
	else
	  // Else use ‘day’ theme
	  document.div.className = "day";
});

4. Military time to am pm conversion

var date = new Date(data.hourly.data[h].time * 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        //var ampm = hours >= 12 ? 'pm' : 'am';
        //hours = hours % 12;
        //hours = hours ? hours : 12;
        var HoursOfTheDay = hours + ':' + minutes + minutes;
        
5. Remove redundant margin for .circles childs

.widget .container-2 .circles:first-child,
.widget .container-2 .circles:nth-child(5n+6),
.widget .container-3 .circles:first-child,
.widget .container-3 .circles:nth-child(5n+6) {
    margin-left: 16px;
}

6. Split JS file into 2 

    document.querySelector("head").appendChild(script);
    script.setAttribute("src", "//m.edumedia.ca/tonk0006/mad9014/weather/js/widget.js");
    
7. Resolve minutely problem

var Next24Hours;

function Next24HourData(){
    Next24Hours = data.minutely.summary;
        if (Next24Hours !== undefined) {
            Next24Hours = data.minutely.summary;
        }else {
            Next24Hours = 'No rain expected.';
        };
    }