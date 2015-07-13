(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var copEncounters = angular.module('copEncounters', ['firebase']);

copEncounters.controller('Home.controller', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase('https://cop-encounters.firebaseio.com');
  var filteredBadge = [];

  $scope.badgeNumber = '';
  $scope.date;
  $scope.message;

  $scope.entries = [];

  


  $scope.data = $firebaseArray(ref);

  $scope.addMessage = function() {
    $scope.entries = [];
    $scope.data.$add({
      badge_number: $scope.badgeNumber,
      date: $scope.date,
      comment: $scope.message
    });

    ref.orderByChild("badge_number").equalTo($scope.badgeNumber).on("child_added", function(snapshot) {
      // empty the entries array
      // push snapshot to the array
      $scope.entries.push(snapshot.val());
      console.log(snapshot.val());
      console.log("test");


      //$scope.filteredData = filteredBadge;
      //$filteredbadge.push({child});
      //console.log(filteredBadge);

      
      // if badge number does not have any matching badge numbers, return "There was no other matching post to that badge number"  
      if ($scope.entries.length == 1) {
        $scope.confirmation = "There was no other matching post to that badge number";
      }
    });
  };


/// when new badge number matches other child, filter the data
/// push data to data
/// find when badge number is true ?

/// var filteredBadge = [];
///    var newBadge = filteredBadge;
///    var matchBadge = newBadge.search($scope.data);
///    
///    if(matchBadge != -1)
///      document.write("There was a matching badge number post to " + matchBadge); 
///    else
///      document.write("There was no matching post to that badge number");

///////////////////

///  var results = [];
///  var searchBadge = "badge_number";
///  var child_added = "badgeNumber";
///  for (var i=0 ; i < obj.list.length ; i++)
///  {
///     if (obj.list[i][searchBadge] == child_added) {
///         results.push(obj.list[i]);
///     }
///  }
///////////////////

/// function search(data, badge_number) {
///    var results;

///   results = source.filter(function(entry) {
///        return entry.badge_number().indexOf(badge_number) !== -1;
///    });
///    return results;
/// }

/////////////

}]);



// When form is submitted, search the database for matching badge numbers
// Show matching entries below form



// homepage vid 
var fullScreenVideo = fullScreenVideo || {};

fullScreenVideo = {
    name: 'fullScreenVideo',
    /**
     * CHANGE THESE VARIABLES TO YOUR VIDEOS
     * overlayVideo: The video in the overlay
     * overlayVideoDiv: The jQuery selector of the div containing the overlay video
     * backgroundvideo: The video in the backgorund
     * backgroundideoDiv: The jQuery selector of the div containing the background video
     */
    overlayVideo: 'e7w8y4xxxu',
    overlayVideoDiv: '#wistia_e7w8y4xxxu',
    backgroundvideo: '4df0jxal0p',
    backgroundideoDiv: '#wistia_4df0jxal0p',
    
    /**
     * This will call Wistia and embed the two videos
     * @param None
     */
    embedVideo: function()
    {
      var videoOptions = {};
  
      // Add the crop fill plugin to the videoOptions
      Wistia.obj.merge(videoOptions, {
        plugin: {
          cropFill: {
            src: "//fast.wistia.com/labs/crop-fill/plugin.js"
          }
        }
      });

      // Video in the background
      wistiaEmbed = Wistia.embed(fullScreenVideo.backgroundvideo, videoOptions);
      // Video to be shown in the overlay
      overlayEmbed = Wistia.embed(fullScreenVideo.overlayVideo, videoOptions);

      /**
       * We load the thumbnail in the background while we wait
       * for the video to load and play. Once loaded, we pause, reset to 
       * frame zero, show the video then play it.
       */
      wistiaEmbed.bind("play", function(){
        wistiaEmbed.pause();
        wistiaEmbed.time(0);
        $(fullScreenVideo.backgroundideoDiv).css('visibility', 'visible');
        wistiaEmbed.play();
        return this.unbind;
      });
    },
    /**
     * Plays the video set as overlayEmbed
     * @param None
     */
    playVideo: function()
    {
      $(fullScreenVideo.overlayVideoDiv).css("left", 0).css("visibility", "visible");
      overlayEmbed.plugin.cropFill.resize();
      $("#text").css({ opacity: 0 });
      $("#ex").css("right", 24);
      overlayEmbed.play();
    },
    /**
     * Hide the overlay video and pause it. Also reshow 
     * the text on the page.
     * @param None
     */
    exitVideo: function()
    {
      $(fullScreenVideo.overlayVideoDiv).css("left", -3000).css("visibility", "hidden");
      $("#ex").css("right", -3000);
      $("#text").css({ opacity: 1 });
      overlayEmbed.pause();
      overlayEmbed._keyBindingsActive = false;
    },
    /**
     * Fix the size of the images and text on page
     * @param None
     */
    fixTextPosition: function()
    {
      var width = $( window ).width();
      var height = $( window ).height();
      textWidth = $("#text").width();
      textHeight = $("#text").height();
      $("#video_container").css("width", width).css("height", height);
      $("#main-image").css("width", width).css("height", height);
      $("#text").css("left", (width/2) - (textWidth/2)).css("top", (height/2) - (textHeight/2));
    }
     
}

/**
 * When the doc is ready, fix the video and images sizes
 * then display the text on the page.
 */
$(document).ready(function() {
  fullScreenVideo.fixTextPosition();
  $("#text").delay(200).animate({ opacity: 1 }, 650);
});

// If the widow is resized, resize the videos
$(window).resize(fullScreenVideo.fixTextPosition);

// When the play button is clicked, call the play function
$(".rectangle").click(fullScreenVideo.playVideo);

// When the "X" is clicked, exit the video
$("#ex").click(fullScreenVideo.exitVideo);

// Start loading the video
fullScreenVideo.embedVideo();

// homepage vid //



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