*************************************************
         Author: Vladimir Tonkonogov
         Project: MAD9014
         Title: Forecast.io Weather Widget
*************************************************

**
===============
1. DESCRIPTION:
===============

This project represents a weather widget fetching data from Forecast.io website. The widget has the location coordinates set for Algonquin College Woodroffe campus, Ottawa, ON. It's a simple widget that you can put on your page by copying the div code it is contained in and a link to the JS file. The widget has two themes styled for the time of the day, light theme for 6 am to 6 pm, and dark theme for the evening and night 12 hours. 


**
================
2. INSTRUCTIONS:
================

*********
1) The weather widget starts with Algonquin College name and Current date and time. 
Below this there is a link to forecast.io website that should fetch a more detailed weather information for that location. The link should be opened in a new window. 
*********

*********
2) Below that is the main widget field with five circles each containing information about current weather conditions: Current Conditions, Temperature, Cloud Cover, Humidity and Wind Speed. These circles just hold the necessary data and are not clickable.  
*********

*********
3) Below them is the Next 24 hours weather forecast in a short sentence, which is followed by a + (plus) sign, which is clickable. When clicked, the plus sign opens a special container for the next 24 hours weather forecast. This container is scrollable vertically down (and then up again), and has a special mouse symbol indicating that. The scroll bars have been removed in CSS to make the widget look sleeker (::-webkit-scrollbar { width: 0; };). The circles inside the container have almost similar kind of information to the main widget field, except for the first one, which also shows the time the specific circle forecast line is referred to. Clicking the plus sign again will close this container.
*********

*********
4) Below that, there is another line, showing the forecast in words for next week. At the end of the line, there is again a plus sign, that opens another container for the detailed weather forecast for next week. You have to click the plus sign to open that container. It also has no visible scroll bars. The first circle in a forecast line has days of the week and forecasted weather conditions. The rest of the circles are similar to the ones we had before, except for the Temperature circles, which now shows the range of temperatures for that particular day of the week. The plus button will close this container when clicked.
*********

*********
4) You cannot have both containers opened at the same time, but you can open another container, when any of them is opened, and it will show on top of the opened one. You can interate between the containers by clicking plus signs for the two containers one after the other. If you want to close the container field altogether, you have to click the plus sign for the conatiner that is currently showing in the field.
*********

I hope that you will find this little widget helpful and will use it in your website. It is free of charge. Please contact the developer at 613 123 4567 in case you have any questions.


(c) Vladimir Tonkonogov