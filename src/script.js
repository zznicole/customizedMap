let myMap = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 58.41374, lng: 15.62351 },
  zoom: 14,
});

let myMarker = new google.maps.Marker({
  position: { lat: 58.41374, lng: 15.62351 },
  map: myMap,
  draggable: true,
  icon: "https://image.flaticon.com/icons/svg/807/807927.svg",
});
