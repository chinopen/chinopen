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

      content: `<h3>${use.name}</h3><br><p>Open:${use.open}</p><br><p>Close:${use.close}</p><br><a href="place/${use.id}">Ir a la tienda</a>`,

    })
    console.log(use)
    let marker = new google.maps.Marker({
      position: use.pos,
      map: map,
      title: use.name,
      
    });
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  })

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }


}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}