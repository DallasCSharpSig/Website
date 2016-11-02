(function(){

	var myLatlng;
	var map;
	var marker;

	function initialize() {
		myLatlng = new google.maps.LatLng(33.0777929,-96.809309);

		var mapOptions = {
		  zoom: 16,
		  center: myLatlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  scrollwheel: false,
		  draggable: false
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var contentString = '<p style="line-height: 20px;"><strong>Improving</strong></p><p>5445 Legacy Drive, Suite 100 Addison, TX 75001</p>';

		var infowindow = new google.maps.InfoWindow({
		  content: contentString
		});

		marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map,
		  title: 'Marker'
		});

		google.maps.event.addListener(marker, 'click', function() {
		  infowindow.open(map,marker);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	
})();

