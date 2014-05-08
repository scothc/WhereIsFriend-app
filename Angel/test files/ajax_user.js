/****Create a New User***/
$.ajax({
	url: "http://54.187.144.176/user",
	type: "POST",
	data: {
		username:"Pepe",
		password:"pepe"
	},
	success: function(data) {
		//console.log(data.username + " " + data.password);
		console.log(data);
	},
	error: function() {
		alert("Something went wrong");
	}
});

/****Update a New User***/
// $.ajax({
//  var user_id = 5
// 	url: "http://54.187.144.176/user/" + user_id,
// 	type: "PUT",
// 	data: {
// 		username:"Pepe",
// 		pasword:"pepe"
// 	},
// 	success: function(data) {
// 		//console.log(data.username + " " + data.password);
// 		console.log(data);
// 	},
// 	error: function() {
// 		alert("Something went wrong");
// 	}
// });

/****Authenticate a User****/
// $.ajax({
// 	url: "http://54.187.144.176/user/auth",
// 	type: "POST",
// 	data: {
// 		username:"Scot",
// 		pasword:"scot"
// 	},
// 	success: function(data) {
// 		//console.log(data.username + " " + data.password);
// 		console.log(data);
// 	},
// 	error: function() {
// 		alert("Something went wrong");
// 	}
// });

/****Delete a User****/
// $.ajax({
// 	url: "http://54.187.144.176/user/5",
// 	type: "DELETE",
// 	success: function(data) {
// 		//console.log(data.username + " " + data.password);
// 		console.log("SUCCESS DELETE");
// 	},
// 	error: function() {
// 		alert("Something went wrong");
// 	}
// });

/***Create a New Location Entry***/
// $.ajax({
// 	url: "http://54.187.144.176/location",
// 	type: "POST",
// 	data: {
// 		latitude:37.768185,
// 		longitude:-122.492902,
// 		user_id:6	
// 	},
// 	success: function(data) {
// 		//console.log(data.latitude + " " + data.longitude);
// 		console.log(data);
// 	},
// 	error: function() {
// 		alert("Something went wrong");
// 	}
// });

/***Search for Location Entry***/
// $.ajax({
// 	url: "http://54.187.144.176/search/5",
// 	type: "GET",
// 	success: function(data) {
// 		console.log(data);
// 		console.log("lat: "+data.latitude);
// 		console.log("lon: "+data.longitude);
// 		console.log("timestamp: "+data.updated_at);
// 		console.log("user_id: "+data.user_id);

// 	},
// 	error: function() {
// 		alert("There was an error searching for a location");
// 	}
// });

            // alert("getOtherUsersLocation");
            // $.ajax({
            //     url: "http://54.187.144.176/search/6",
            //     type: "GET",
            //     success: function(data) {
            //         scotLat = data.latitude;
            //         scotLon = data.longitude;
            //         alert(scotLat + " " + scotLon);

            //     },
            //     error: function() {
            //         alert("There was an error getting the othe users location");
            //     }
            // });




            // $.ajax({
            //     url: "http://54.187.144.176/search/"+5,
            //     type: "GET",
            //     success: function(data) {
            //          console.log("otherUserLat = "+data.latitude);
            //          console.log("otherUserLon = "+data.longitude);
            //          console.log("otherUserName = "+data.username);
            //          console.log("theTime = "+data.formatted_time);


            //     },
            //     error: function() {
            //         alert("There was an error getting the othe users location");
            //     }
            // });

/****Delete a Location Entry****/
// $.ajax({
// 	url: "http://54.187.144.176/location/5",
// 	type: "DELETE",
// 	success: function(data) {
// 		//console.log(data.username + " " + data.password);
// 		console.log("SUCCESS DELETE");
// 	},
// 	error: function() {
// 		alert("Something went wrong deleting a location");
// 	}
// });




















// $.ajax({
// 	url: "http://daretodiscover.net/user/6",
// 	type: "PUT",
// 	data: {
// 		firstname: "Arun 2",
// 		lastname: "Sood 2",
// 		age: 30
// 	},
// 	success: function(data) {
// 		console.log(data);
// 	}
// });

// $.ajax({
// 	url: "http://daretodiscover.net/wine/16",
// 	type: "DELETE",
// 	success: function(data) {
// 		console.log(data);
// 	},
// 	error: function() {
// 		alert("Something went wrong")
// 	}
// });

//setInterval(function(){alert("Hello")},3000);



