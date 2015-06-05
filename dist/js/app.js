(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var data = {
    labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014"],
    datasets: [
        {
            label: "People killed by LAPD since 2008",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [44, 38, 35, 54, 40, 71, 44]
        }
        //{
            // label: "My Second dataset",
            // fillColor: "rgba(151,187,205,0.2)",
            // strokeColor: "rgba(151,187,205,1)",
            // pointColor: "rgba(151,187,205,1)",
            // pointStrokeColor: "#fff",
            // pointHighlightFill: "#fff",
            // pointHighlightStroke: "rgba(151,187,205,1)",
            // data: [28, 48, 40, 19, 86, 27, 90] 


        //}
    ]
};



var ctx = $("#myChart").get(0).getContext("2d");
var myLineChart = new Chart(document.getElementById("myChart").getContext("2d")).Line(data);
    document.getElementById("legendDiv").innerHTML = myLineChart.generateLegend();

$('#myChart').hide();

$(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll > 200) {
        console.log("scrolled more than 200 pixels");
        $('#myChart').show();
    }
})
},{}]},{},[1]);