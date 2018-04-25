console.log('IronGenerator JS imported successfully!');

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 40.392513,
      lng: -3.698211
    },
    zoom: 8
  });

  //Marks 
  let bounds = new google.maps.LatLngBounds();
  let changedUse = window.users.map(use => {

    let mappeduse = {
      name: use.username,
      pos: {
        lat: use.loc.coordinates[0],
        lng: use.loc.coordinates[1]
      },
      open: use.open,
      id: use._id,
      close: use.close

    }
    //console.log(use.username)
    bounds.extend(mappeduse.pos);
    return mappeduse;
  })
  map.fitBounds(bounds);

  changedUse.forEach(use => {
    let infowindow = new google.maps.InfoWindow({

      content: `<h3>${use.name}</h3>
      <p>Open:${use.open}</p>
      <p>Close:${use.close}</p>
      <a href="/user/profile/${use.id}">Ir a la tienda</a>`,

    })

    let marker = new google.maps.Marker({
      position: use.pos,
      map: map,
      title: use.name,

    });
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  })

  var infoWindow = new google.maps.InfoWindow({
    map: map
  });
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Usted esta Aquí');
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }
  //// hacer las direcciones ///
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: madrid,
    origin: pos,
    travelMode: 'WALKING'
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function (response, status) {
    if (status == 'OK') {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });


}