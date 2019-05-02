/*
Game JS for Clicker Game Template
by Mike Henry (mikeshenry@gmail.com)

Available from https://github.com/mashmac2/clicker-game-template

You have permission to reuse this code for non-commercial purposes with attribution

*/
//object for our game items
var items = {};
items.topic = "";
items.clicks = 0;
items.blah = 0;
items.fertilizer = 0;
items.grandma = 0;
items.greenhouse = 0;
items.tractor = 0;
items.farm = 0;

//on page load, this runs one time.
$(document).ready(function(){
  // localstorage
  if (typeof(Storage) !== "undefined") {
  	// Code for localStorage
  	console.log("Viskas gerai");

  	if (localStorage.topic) {
  	  //already exists, second loading of the game
      $('#content p').show();
  	  $('#clicker').show();

  		//Retrieve all variables
  		items.topic = localStorage.topic;
  		items.clicks = localStorage.clicks;
		items.blah = localStorage.blah;
		items.fertilizer = localStorage.fertilizer;
    items.grandma = localStorage.grandma;
    items.greenhouse = localStorage.greenhouse;
    items.tractor = localStorage.tractor;
    items.farm = localStorage.farm;

  	} else {
  		// first loading of the game

  		// prompt for topic of your thesis
  		var topic = prompt("what variety of tomatoes would you like to grow?",'');
  		localStorage.setItem("topic", topic);
  		items.topic = topic;
  		$('#topic').text("You are growing " + items.topic + " variety").show();

		  //fade in messages
  		$('#content .one').delay(1000).fadeIn(1000);
  		$('#clicker').delay(2000).fadeIn(1000);

  	}
  	      // Put variables into the page
  	  $('#topic').text("You are growing " + items.topic + " variety");
  	  $('#clicks-status').text(items.clicks);
	  $("#fertilizer-status").text(items.fertilizer);
    $('#grandma-status').text(items.grandma);
    $('#greenhouse-status').text(items.greenhouse);
    $('#tractor-status').text(items.tractor);
    $('#farm-status').text(items.farm);

	  //add blah and loading

  } else {
    // Sorry! No Web Storage support..
    console.log("No localStorage support!");
  }
  //end localstorage
});

//Game functions; these run when buttons are clicked, or when they're used in the document.ready or window.setInterval sections
function increment(item){
  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);
}

function blahButton(){
	//for clicking on the blah button
}

function fertilizerButton(){
	//for clicking on the buy autoclicker button
	console.log("fertilizerbutton");
	if(items.clicks > 20){
	items.fertilizer += 1;
	items.clicks -= 20;
	$("#fertilizer-status").text(items.fertilizer);
	$("#clicks-status").text(items.clicks);
	}
}
function grandmaButton(){
	//for clicking on the buy autoclicker button
	console.log("grandmabutton");
	if(items.clicks > 100){
	items.grandma += 1;
	items.clicks -= 100;
	$("#grandma-status").text(items.grandma);
	$("#clicks-status").text(items.clicks);
	}
}
function greenhouseButton(){
	//for clicking on the buy autoclicker button
	console.log("greenhousebutton");
	if(items.clicks >2000){
	items.greenhouse += 1;
	items.clicks -= 2000;
	$("#greenhouse-status").text(items.greenhouse);
	$("#clicks-status").text(items.clicks);
	}
}

function tractorButton(){
	//for clicking on the buy autoclicker button
	console.log("tractorbutton");
	if(items.clicks > 10000){
	items.tractor += 1;
	items.clicks -= 10000;
	$("#tractor-status").text(items.tractor);
	$("#clicks-status").text(items.clicks);
	}
}

function farmButton(){
	//for clicking on the buy autoclicker button
	console.log("farmbutton");
	if(items.clicks > 25000){
	items.farm += 1;
	items.clicks -= 25000;
	$("#farm-status").text(items.farm);
	$("#clicks-status").text(items.clicks);
	}
}

function save(){
  localStorage.setItem("clicks", items.clicks);
  localStorage.setItem("blah", items.blah);
  localStorage.setItem("fertilizer", items.fertilizer);
  localStorage.setItem("grandma", items.grandma);
  localStorage.setItem("greenhouse", items.greenhouse);
  localStorage.setItem("tractor", items.tractor);
  localStorage.setItem("farm", items.farm);
  console.log("Saving");

  $('#saving-status-2').fadeIn(500).delay(4000).fadeOut(500);
}

  //game loop; this runs every ten seconds to do things in the game
window.setInterval(function(){

    //You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
    console.log("In the save loop");

  	save();
}, 10000); //updates once per second (1000 milliseconds)

window.setInterval(function(){

    //You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
    console.log("In the game loop");
	//check if num of clicks is greater than 20; show autoclicker
	//if(items.clicks > 20){
	//	$("#autoclickers").fadeIn(1000);
	//}


	//autoclickers
	if(items.fertilizer > 0){
		items.clicks += (1*items.fertilizer);
	}
	if(items.grandma > 0){
		items.clicks += (5*items.grandma);
	}
  if(items.greenhouse > 0){
		items.clicks += (25*items.greenhouse);
	}
  if(items.tractor > 0){
		items.clicks += (50*items.tractor);
	}
  if(items.farm > 0){
		items.clicks += (100*items.farm);
	}
	$("#clicks-status").text(items.clicks);

  if(items.clicks > 100) {
    $('#grandma').show();
  }
  if(items.clicks > 2000) {
    $('#greenhouse').show();
  }
  if(items.clicks > 10000) {
    $('#tractor').show();
  }
  if(items.clicks > 25000) {
    $('#farm').show();
  }
}, 1000); //updates once per second (1000 milliseconds)
