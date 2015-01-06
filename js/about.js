(function(){

	var myLatlng;
	var map;
	var marker;

	function initialize() {
		myLatlng = new google.maps.LatLng(37.397802,-121.890288);

		var mapOptions = {
		  zoom: 13,
		  center: myLatlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP,
		  scrollwheel: false,
		  draggable: false
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var contentString = '<p style="line-height: 20px;"><strong>Banzhow Template</strong></p><p>123 My Street, Banzhow City, CA 4567</p>';

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

