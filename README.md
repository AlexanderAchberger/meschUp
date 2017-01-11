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






