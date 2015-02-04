/*****************************************
    SCRIPT for WIDGET that WILL LOAD CSS
    & MAIN WIDGET JS FILE with AJAX CALL
*****************************************/

    // GLOBAL VAR

var scriptsCount = 0;
var CurrCond;

    // LOAD CSS FILES (BASED on TIME of the DAY) & jQUERY

document.addEventListener('DOMContentLoaded', function(){
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.addEventListener('load', function(){
        scriptsCount++;
        if(scriptsCount === 3){
            
            buildWidget('.widget');
        
        }
    });
    
    function getStylesheet() {
        var currentTime = new Date().getHours();
        if (6 <= currentTime && currentTime < 18) {
            css.setAttribute('href', 'css/day.css');;
        }
        else {
            css.setAttribute('href', 'css/night.css');
        }
    }

    getStylesheet();
    
    document.querySelector('head').appendChild(css);
    
    var jQ = document.createElement('script');
    jQ.addEventListener('load', function() {
        scriptsCount++;
        if(scriptsCount === 3){
            
            buildWidget('.widget');
            
        }
    });
    
    document.querySelector('head').appendChild(jQ);
    jQ.setAttribute('src','//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');
    
     var script = document.createElement("script");
    script.addEventListener("load", function () {
        scriptsCount++;
        if (scriptsCount === 3) {

            buildWidget(".mywidget");
            console.log("all scripts loaded");

        }
    });
    
    document.querySelector("head").appendChild(script);
    script.setAttribute("src", "//m.edumedia.ca/tonk0006/mad9014/weather/js/widget.js");
});

    