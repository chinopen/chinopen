
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
        name:use.name,
        pos: {
          lat: use.loc.coordinates[0],
          lng: use.loc.coordinates[1]
        }
      }
      bounds.extend(mappeduse.pos);
      return mappeduse;
    })
    map.fitBounds(bounds);
  
    changedUse.forEach(use => {
      new google.maps.Marker({
        position: use.pos,
        map: map,
        title: use.name
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

initMap();

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}