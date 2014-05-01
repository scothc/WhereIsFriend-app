// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;
var myLat;
var myLon;
var theTime;
var myUserId = "6";
var otherUserName = "unknown";
var otherUserId = "5";
var otherUserLat=0;
var otherUserLon=0;
// var otherUserLat = "37.765120";
// var otherUserLon = "-122.409350";

function initialize() {
  var mapOptions = {
    zoom: 11
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      myLat = position.coords.latitude;
      myLon = position.coords.longitude;
      var pos = new google.maps.LatLng(myLat, myLon);

      // var infowindow = new google.maps.InfoWindow(
      //  {
      // //   map: map,
      // //   position: pos,
      //    content: 'ME'
      //  }
      // );

      map.setCenter(pos);


      /**** Refresh ****/
      //refresh();
      $("#post").on("click", function(){
          postButton();
      });

      $("#get").on("click", function(){
          getButton();
      });


    /**** fill the inputs ***/
      //fillInputs();
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser does not support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(36.395903, -6.171651),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);



function setMarker(user_name, lat, lon, theTime){
      
      var myLatlng = new google.maps.LatLng(lat,lon);
      // var mapOptions = {
      //   zoom: 4,
      //   center: myLatlng
      // }
      // var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      var marker = new google.maps.Marker({
           position: myLatlng,
           map: map,
          // title: 'Hello World!'
      });

       var infowindow = new google.maps.InfoWindow(
       {
      //   map: map,
      //   position: pos,
         content: user_name + "</br> " + theTime
       }
      );

     google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
     });
     infowindow.open(map, marker);
}

function postMyLocation(myLat, myLon, myUserId){
    /***POST request to Create a New Location***/

    $.ajax({
     url: "http://54.187.144.176/location",
     type: "POST",
     data: {
         latitude:myLat,
         longitude:myLon,
         user_id:myUserId   
     },
     success: function(data) {
         //console.log(data.username + " " + data.password);
         // console.log(data);
        //setMarker(myUserId, myLat, myLon);
        getLocation(myUserId);
     },
     error: function() {
         alert("There was an error updating my location");
     }
    });
}

function getLocation(id){
    $.ajax({
        url: "http://54.187.144.176/search/"+id,
        type: "GET",
        success: function(data) {
             otherUserLat = data.latitude;
             otherUserLon = data.longitude;
             otherUserName = data.username;
             theTime = data.formatted_time;

      // /**** set the marker***/
            setMarker(otherUserName, otherUserLat, otherUserLon, theTime);

        },
        error: function() {
            alert("There was an error getting the othe users location");
        }
    });
}


// function refresh(){
    
//   /**** POST my location ****/
//   postMyLocation(myLat, myLon, myUserId);

//   /**** Get othe users location ****/
//   getLocation();
// }


function postButton(){    
    /**** POST my location ****/
    postMyLocation(myLat, myLon, myUserId);


}      


function getButton(){
  /**** Get othe users location ****/
  getLocation(otherUserId);
}





// function fillInputs(){
//   $(".latitude").val(myLat);
//   $(".longitude").val(myLon);
// }


