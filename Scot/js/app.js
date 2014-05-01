// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see a blank space instead of the map, this
// is probably because you have denied permission for location sharing.

var map;
var myLat;
var myLon;
var myUserId = "6";
var angelUserId = "5";
var angelLat=0;
var angelLon=0;
// var scotLat = "37.765120";
// var scotLon = "-122.409350";

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
    var content = 'Error: Geolocation service failed.';
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



function setMarker(user_id, lat, lon){
      
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
         content: user_id
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
        setMarker(myUserId, myLat, myLon);
     },
     error: function() {
         alert("There was an error updating my location");
     }
    });
}

function getOtherUsersLocation(){
    $.ajax({
        url: "http://54.187.144.176/search/5",
        type: "GET",
        success: function(data) {
             angelLat = data.latitude;
             angelLon = data.longitude;

      // /**** set the marker***/
            setMarker(angelUserId, angelLat, angelLon);

        },
        error: function() {
            alert("There was an error getting the othe users location");
        }
    });
}


function refresh(){
    
  /**** POST my location ****/
  postMyLocation(myLat, myLon, myUserId);

  /**** Get othe users location ****/
  getOtherUsersLocation();
}


function postButton(){    
  /**** POST my location ****/
  postMyLocation(myLat, myLon, myUserId);
}      


function getButton(){
  /**** Get othe users location ****/
  getOtherUsersLocation();
}





// function fillInputs(){
//   $(".latitude").val(myLat);
//   $(".longitude").val(myLon);
// }


