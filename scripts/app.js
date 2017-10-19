
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
    	window.location.href = "https://bahainf.mystagingwebsite.com/200-prayers/";
  	});

  	document.getElementById('butGallery').addEventListener('click', function() {
    	// Load the gallery page
    	window.location.href = "https://bahainf.mystagingwebsite.com/my-gallery/";
  	});

  	document.getElementById('butCalendar').addEventListener('click', function() {
    	// Load the calendar page
    	window.location.href = "https://bahainf.mystagingwebsite.com/";
  	});

  	document.getElementById('butCandles').addEventListener('click', function() {
    	// Load the candles page
    	window.location.href = "https://bahainf.mystagingwebsite.com/celebration-of-bicentennial-birth-anniversary-of-bahaullah/";
  	});

  	document.getElementById('butAbout').addEventListener('click', function() {
    	// Load the about page
    	window.location.href = "https://bahainf.mystagingwebsite.com/about-the-bahais-of-north-florida/";
  	});

  	document.getElementById('butTwitter').addEventListener('click', function() {
    	// Load the twitter page
    	window.location.href = "https://twitter.com/BahaiNorthFL";
  	});

  	document.getElementById('butFacebook').addEventListener('click', function() {
    	// Load the facebook page
    	window.location.href = "https://www.facebook.com/groups/bahainorthflorida/";
  	});

  	document.getElementById('butInstagram').addEventListener('click', function() {
    	// Load the instagram page
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