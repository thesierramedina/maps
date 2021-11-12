let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.89814120775425, lng: -80.18688734824924 },
    zoom: 16,
  });

  const benedumMarker = new google.maps.Marker({
  position: { lat: 39.90040134909528, lng: -80.1879607646066 },
  map,
  title: "Benedum",
  icon: "https://i.imgur.com/HcbKhmn.png",
  });

  new google.maps.Marker({
  position: { lat: 39.89937253132313, lng: -80.18546629767292 },
  map,
  title: "Buhl Hall",
  });

  new google.maps.Marker({
  position: { lat: 39.90061099366048, lng: -80.18719296901119 },
  map,
  title: "Robert's Chapel",
  });

const chapelCoords = [
    { lat: 39.90095227252233, lng: -80.18731072663984 },
    { lat: 39.9009372161378, lng: -80.1870294167492 },
    { lat: 39.900515239082765, lng: -80.18704264297902 },
    { lat: 39.900510150077466, lng: -80.18732788645806 },
    { lat: 39.90095227252233, lng: -80.18731072663984 }
  ];

const chapelPolygon = new google.maps.Polygon({
    paths: chapelCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  chapelPolygon.setMap(map);

const eberlyCoords = [

{ lat: 39.90005305490059, lng: -80.18549297214429 },
{ lat: 39.900042602452224, lng: -80.18519237546121 },
{ lat: 39.899704856856225, lng: -80.18517193829295 },
{ lat: 39.89971138966885, lng: -80.18550233917973 },
{ lat: 39.90005305490059, lng: -80.18549297214429 },
];

const eberlyPolygon = new google.maps.Polygon({
    paths: eberlyCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  eberlyPolygon.setMap(map);

  const beneduminfo = new google.maps.InfoWindow({
    content: "Waynesburg's Dining Hall",
  });

  benedumMarker.addListener("click", () => {
    beneduminfo.open({
      anchor: benedumMarker,
      map,
      shouldFocus: false,
    });
  });

}

