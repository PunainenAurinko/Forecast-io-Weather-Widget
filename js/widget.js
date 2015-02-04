// MAIN WIDGET SECTION - BUILD the WIDGET & DO the AJAX CALL

    //  the ICONS USED are CLIMACONS by Adam Whitcroft (http://adamwhitcroft.com/climacons/).
    //  They have been recolored white for the project.
    //  Used under the following disclaimer: "You are free to use any of the Climacons Icons (the "icons") in any personal or commercial work without obligation of payment (monetary or otherwise) or attribution, however a credit for the work would be appreciated. Do not redistribute or sell the complete icon set (either in existing or modified form) and do not claim creative credit. Intellectual property rights are not transferred with the download of the icons." 
    // (c) Adam Whitcroft
    
function checkCondition(data) {
        if (data.minutely) {
            CurrCond = data.minutely.summary;
        }else {
            CurrCond = data.currently.summary;
        }
    };

function buildWidget() {
	$.ajax({
		url: 'https://api.forecast.io/forecast/2b5b3d34213af64a5fb34b852143231e/45.348391,-75.757045?units=ca',
        type: "POST",
		dataType: 'JSONP',
    }).done( gotData ).fail( whoops );
}

    // PARSE AJAX JSON DATA into HTML ELEMENTS

    function gotData(data) {
    
    console.log(data);
        
    checkCondition(data);
    
    html = '<h1>' + 'Weather for Algonquin College, Ottawa' + '</h1>';
    html += '<h2 class=tone-down>' + Date(1000 * data.currently.time).slice(0, 21) + '</h2>';
    html += '<h3>' + 'More at ' + '<a href="http://forecast.io/#/f/45.348391,-75.757045" target="_blank" class=tone-down>' + 'Forecast.io' + '</a>' + '</h3>';
    html +=  '<p>' + 'Current Conditions: ' + '<span class=tone-down>' + CurrCond + '</span>' + '</p>';
    html += '<div class="container-1">';
    html += '<div class="circles">' + '<p>' + data.currently.summary + '</p>' + '<img src="img/' + data.currently.icon + '.svg" />' + '</div>';
    html += '<div class="circles">' + '<p>' + 'Temperature:' + '</p>' + '<p class="big">' + Math.round(data.currently.temperature) + '&deg;C' + '</p>' + '</div>';
    //html += '<div class="circles">' + '<p>' + 'Pressure:' + '</p>' + '<p class="big">' + Math.round(data.currently.pressure) / 10 + 'kPa' + '</p>' + '</div>';
    html += '<div class="circles">' + '<p>' + 'Cloud Cover:' + '</p>' + '<p class="big">' + + Math.round(data.currently.cloudCover * 100) + '%' + '</p>' + '</div>';
    html += '<div class="circles">' + '<p>' + 'Humidity:' + '</p>' + '<p class="big">' + Math.round(data.currently.humidity * 100) + '%' + '</p>' + '</div>';
    html += '<div class="circles">' + '<p>' + 'Wind Speed:' + '</p>' + '<p class="big">' + Math.round(data.currently.windSpeed) + ' ' + 'km/h' + '</p>' + '</div>';
    html += '</div>';
    html +=  '<p>' + 'Next 24 hours: ' + '<span class=tone-down>' + data.hourly.summary + '</span>' + '<button id="clickme-1">' + '+' + '</button>' + '</p>';
    html +=  '<p>' + 'Next week: ' + '<span class=tone-down>' + data.daily.summary + '</span>' + '<button id="clickme-2">' + '+' + '</button>' + '</p>';
        
    html += '<div class="container-2">';
    
    for (var h=0; h<24; h++) {
        
        var date = new Date(data.hourly.data[h].time * 1000);
                
        html += '<div class="circles">' + '<p class="big">' + date.getHours() + ':00' + '</p>' + '<p>' + data.hourly.data[h].summary + '<img src="img/' + data.hourly.data[h].icon + '.svg" />' + '</p>' + '</div>';
        html += '<div class="circles">' + '<p>' + 'Temperature:' + '</p>' + '<p class="big">' + Math.round(data.hourly.data[h].temperature) + '&deg;C' + '</p>' + '</div>';
        html += '<div class="circles">' + '<p>' + 'Cloud Cover:' + '</p>' + '<p class="big">' + + Math.round(data.hourly.data[h].cloudCover * 100) + '%' + '</p>' + '</div>';
        html += '<div class="circles">' + '<p>' + 'Humidity:' + '</p>' + '<p class="big">' + Math.round(data.hourly.data[h].humidity * 100) + '%' + '</p>' + '</div>';
        html += '<div class="circles">' + '<p>' + 'Wind Speed:' + '</p>' + '<p class="big">' + Math.round(data.hourly.data[h].windSpeed) + ' ' + 'km/h' + '</p>' + '</div>';
        
    }

    html += '</div>';
    
    html += '<div class="container-3">';
    
    for (var d = 0; d < 7; d++) {
    
    var dDate = new Date(1000 * data.daily.data[d].time);
        var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                
    function firstTwoWords(str) {
        return str.split(/\s+/).slice(0, 2).join(" ");
    }
    
    var str = data.daily.data[d].summary;
             
        html += '<div class="circles">' + '<p class="big">' + weekday[dDate.getDay()] + '</p>' + '<p>' + firstTwoWords(str) + '<img src="img/' + data.daily.data[d].icon + '.svg" />' + '</p>' + '</div>';
        html += '<div class="circles">' + '<p>' + 'Temperature:' + '</p>' + '<p class="big">' + Math.round(data.daily.data[d].temperatureMin) + ' - ' + Math.round(data.daily.data[d].temperatureMax) + '&deg;C' + '</p>' + '</div>';
        html += '<div class="circles">' + '<p>' + 'Cloud Cover:' + '</p>' + '<p class="big">' + Math.round(data.daily.data[d].cloudCover * 100) + '%' + '</p>' + '</div>';
        html += '<div class="circles">' + '<p>' + 'Humidity:' + '</p>' + '<p class="big">' + Math.round(data.daily.data[d].humidity * 100) + '%' + '</p>' + '</div>';
        html += '<div class="circles">' + '<p>' + 'Wind Speed:' + '</p>' + '<p class="big">' + Math.round(data.daily.data[d].windSpeed) + ' ' + 'km/h' + '</p>' + '</div>';
        
    }
    
    html += '</div>';
    
    $('.widget').append(html);
    
    toggle1();
    toggle2();
        
};

    // TOGGLE OPEN & CLOSE BUTTON

function toggle1(){
    $('#clickme-1').click(function() {
        if ($('.widget .container-3')[0].style.display == "block") {
            $('.widget .container-3').slideUp();    
            $('.widget .container-2').slideDown();
        }else {
            $('.widget .container-2').slideToggle();
        }
    });
}

function toggle2(){
    $('#clickme-2').click(function() {
        if ($('.widget .container-2')[0].style.display == "block") {
            $('.widget .container-2').slideUp();    
            $('.widget .container-3').slideDown();
        }else {
            $('.widget .container-3').slideToggle();
        }
    });
}

    // IF AJAX CALL FAILS

function whoops() {
    var p = document.createElement('p');
    p.innerHTML = "Ooops.. something went terribly wrong (forecast.io probably down for the moment)!";
    document.querySelector('.widget').appendChild(p);
}