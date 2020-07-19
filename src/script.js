let myMap = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 58.41374, lng: 15.62351 },
  zoom: 14,
  styles: [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.attraction",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffeb3b"
        },
        {
          "weight": 3
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ]
});

let contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Linköping</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Linköping</b>, also referred to as <b>Linkoeping</b>(in English), is a city in southern Sweden, ' +
      'with 161,499 inhabitants as of 2019. It is the 5th largest city in Sweden. '+
      'It is the seat of Linköping Municipality and the capital of Östergötland County.'+
      'Linköping is well known for its cathedral, '+
      'is the center of an old cultural region and celebrated its 700th anniversary in 1987.'+
      'Nowadays, Linköping is known for its university and its high-technology industry.'+
      ' Linköping wants to create a sustainable development of the city and therefore plans to become a carbon-neutral community by 2025 '+
      'Special sights of interests are: the locks of Berg on the Göta Canal,  '+
      'the locks of the Kinda Canal, Gamla Linköping, Valla skogen and Valla fritidsområde (Old Linköping, Valla Wood, and the Valla recreational area), '+
      'Flygvapen museum (the Air Force Museum).</p>'+
      '<p>Attribution: Linköping, <a href="https://en.wikipedia.org/wiki/Link%C3%B6ping">'+
      'https://en.wikipedia.org/wiki/Link%C3%B6ping</a> '+
      '(last visited 13 June 2020.</p>'+
      '</div>'+
      '</div>';

let infowindow = new google.maps.InfoWindow({
  content: contentString
});

let swimSpots =

let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(labels.indexOf('L'));
let labelIndex = 11;

let myMarker = new google.maps.Marker({
  position: { lat: 58.41374, lng: 15.62351 },
  map: myMap,
  label: labels[labelIndex++ % labels.length],
  draggable: true,
});
 
myMarker.addListener('click', function() {
  infowindow.open(myMap, myMarker);
});