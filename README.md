# Meschup Plugin

This plugin can convert data to charts as images or html files. The current version provides gauges and multiline charts.

## Installing

First go to the plugin directory and type in the terminal
```
perl -p -i -e "s/\r//g" install.sh
```
As second step you have to type in 
```
. install.sh
```

## Start the server

To start the server just type in the terminal
```
node index.js
```
It is necessary that the server is running to get the charts.

## Documentation page

To see what charts you can create there is a documentation page with examples.
To run the documentation page just type the following URL in any browser
```
192.169.7.1:8090
```
If an error occurs make sure you have started the server.

In the first section you can create gauges. There are a few attributes to create the gauges you want:
* Size: The size of the diameter of the chart
* Value: The actual value that is shown in the gauge
* Label: The name of the gauge
* Background Color: Sets the background color of the chart

The second section is a example for the line charts. Here you can change the following attributes:
* Width: The width of the chart in pixels
* Height: The height of the chart in pixels
* Background Color: Sets the background color of the chart
* y-Name: The label of the y-axis
* Curve Type: Here you can choose the type of interpolation
* Dots: If checked, dots will appear on each data point

The data that is plotted is fixed. To understand how you can plot your own dataset, see the chapter below.

## Get your chart by request

The documentation page should help you understand the available attributes to create the chart you want.
In this chapter you will learn how to get a chart through a request to the server.

### Gauge

You can get your own gauge by a request to the server. To do this you have to type in the following in any browser:
```
192.169.7.1:8090/gauge
```
The chart you get is the default chart that is an html page. To change the settings of the gauge you have to add the attributes in the URL. 
To accomplish this you have to insert an '?' after .../gauge and add parameters with an additional '&' for each parameter. For example:
```
192.169.7.1:8090/gauge?&size=400&value=20&label=Temperatur
```
The possible parameters are:
* size
* value
* label
* type
* bgcolor

If you want an image as output instead of an html page, you have to add '&type=png'. The following example will return you an image of the gauge:
```
192.169.7.1:8090/gauge?&size=400&value=20&label=Temperatur&bgcolor=blue&type=png
```

###Linechart

You can create your own Linechart with multiple lines. To achieve this you have to send a Post to the server with your data.
The data must be built as follows:
```
var data = {'datas' : [
          {"date": "x1", "Key1": "value", "Key2": "value", "Key3": "value" ...},
          {"date": "x2", "Key1": "value", "Key2": "value", "Key3": "value" ...},
          ...
        ]};
```
It is important that the array with the data points is called 'datas' and each data point begins with "date" where you can define the x values of the data points.
The more keys you have, the more lines you will get and every new "date" creates a new data point for each line.
Here is an example of some data with three lines and 5 sample points:
```
var data = {'datas' : [
          {"date": "20111001", "New York": "63.4", "San Francisco": Math.random()*100, "Austin": "72.2"},
          {"date": "20120109", "New York": "34.7", "San Francisco": Math.random()*100, "Austin": "54.0"},
          {"date": "20120418", "New York": "59.0", "San Francisco": Math.random()*100, "Austin": "65.1"},
          {"date": "20120727", "New York": "79.4", "San Francisco": Math.random()*100, "Austin": "84.3"},
          {"date": "20120930", "New York": "62.3", "San Francisco": Math.random()*100, "Austin": "71.9"}
        ]};
```
This data has to be sent with a Post to the server. To post something to a server you also need the URL.
The URL is built similar to the Gauge chart. The default URL is:  
```
192.169.7.1:8090/linechart
```
To create your own Linechart you can add parameters to the URL:
* width: The width of the chart in pixels
* height: The height of the chart in pixels
* bgcolor: Sets the background color of the chart
* yname: The label of the y-axis
* curvetype: Here you can choose the type of interpolation
* dots: If checked, dots will appear on each data point
* imagename: the name of the image file

Here is a sample URL with all possible parameters:
```
192.169.7.1:8090/linechart?&width=600&height=300&dots=true&curvetype=curveCardinal&imagename=image1&bgcolor=white&yname=temperatur
```