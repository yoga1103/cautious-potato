
( function() {
	'use strict';

	//the app object
	var app = {
		isLoading: true,
		spinner: document.querySelector('.loader'),
	}


	/********************************************************************************
	*
	* Event listners for the UI elements
	*
	********************************************************************************/

	document.getElementById('butPrayers').addEventListener('click', function() {
    	// Load the prayers page
    	window.location.href = "/prayers.html";
  	});

  	document.getElementById('butGallery').addEventListener('click', function() {
    	// Load the gallery page
    	window.location.href = "/prayers.html";
  	});

  	document.getElementById('butCalendar').addEventListener('click', function() {
    	// Load the gallery page
    	window.location.href = "/prayers.html";
  	});

  	document.getElementById('butCandles').addEventListener('click', function() {
    	// Load the gallery page
    	window.location.href = "/prayers.html";
  	});

  	document.getElementById('butAbout').addEventListener('click', function() {
    	// Load the gallery page
    	window.location.href = "/prayers.html";
  	});

  	document.getElementById('butTwitter').addEventListener('click', function() {
    	// Load the twitter app
    	window.location.href = "twitter://user?id=768116050479251457";
  	});

  	document.getElementById('butFacebook').addEventListener('click', function() {
    	// Load the facebook app
    	window.location.href = "fb://page/bahainorthflorida";
  	});

  	document.getElementById('butInstagram').addEventListener('click', function() {
    	// Load the instagram app
    	window.location.href = "http://instagram.com/_u/bahainorthflorida";
  	});

	/********************************************************************************
	*
	* Methods to update the UI
	*
	*********************************************************************************/

	app.update = function() {
		if (app.isLoading) {
      		app.spinner.setAttribute('hidden', true);
      		app.isLoading = false;
    	}
	};

	app.update();

	//service worker code
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
				 .register('./service-worker.js')
				 .then(function () { console.log('Service worker registered'); });
	}
})();