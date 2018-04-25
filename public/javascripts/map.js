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

  let pos;

  changedUse.forEach(use => {
    let infowindow = new google.maps.InfoWindow({

      content: `<h3>${use.name}</h3>
      <p>Open:${use.open}</p>
      <p>Close:${use.close}</p>
      <a href="/user/profile/${use.id}">Ir a la tienda</a>`,

    })

    pos1 = use.pos

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
  ///////geolocation//////
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
  /////////rutas/////////////// 
   if (changedUse.length <= 1){ // condición para que solo realice la ruta si tiene solo 1 al que ir 
    const directionRequest = {
        origin: pos, // posicion del usuario
        destination: pos1, // posicion de destino recogida en goblal para poder acceder
        travelMode: 'WALKING'
      };
      
      directionsService.route(
        directionRequest,
        function (response, status) {
          if (status === 'OK') {
            // everything is ok
            directionsDisplay.setDirections(response);
    
          } else {
            // something went wrong
            window.alert('Directions request failed due to ' + status);
          }
        }
      );
   }
  
      ///////////////position//////////////

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

  const directionsService = new google.maps.DirectionsService;
  const directionsDisplay = new google.maps.DirectionsRenderer;

  
  directionsDisplay.setMap(map);
}
