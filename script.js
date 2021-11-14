let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.89814120775425, lng: -80.18688734824924 },
    zoom: 17,
    styles:

    [
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#84afa3"
            },
            {
                "lightness": 52
            }
        ]
    },
    {
        "stylers": [
            {
                "saturation": -17
            },
            {
                "gamma": 0.36
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3f518c"
            }
        ]
    }
]


  });

  const benedumMarker = new google.maps.Marker({
  position: { lat: 39.90040134909528, lng: -80.1879607646066 },
  map,
  title: "Benedum",
  icon: "https://i.imgur.com/HcbKhmn.png",
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
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
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
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  eberlyPolygon.setMap(map);

  const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} ];

    const GpacPolygon = new google.maps.Polygon({
        paths: GpacCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });
    GpacPolygon.setMap(map);

    const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429} ];

    const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });
    ThayerPolygon.setMap(map);

    const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];
  // Construct the polygon.
  const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });
  stewartpolygon.setMap(map);

  const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  southpolygon.setMap(map);

const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];
  // Construct the polygon.
  const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  westpolygon.setMap(map);

   const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];
  // Construct the polygon.
  const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  eastpolygon.setMap(map);

const pollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
     { lat: 39.89932674703466, lng: -80.18474261889916 }, 
     { lat: 39.89918383988418, lng: -80.18474185858288 }, 
     { lat: 39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458 },
  ];

    // Construct the polygon.
  const pollockpolygon = new google.maps.Polygon({
    paths: pollockCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  pollockpolygon.setMap(map);

  const beneduminfo = new google.maps.InfoWindow({
    content: "Waynesburg's Dining Hall",
  });

  const willisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  ];
      // Construct the polygon.
  const willisonpolygon = new google.maps.Polygon({
    paths: willisonCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  willisonpolygon.setMap(map);

  const fieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    ];
          // Construct the polygon.
  const fieldhousepolygon = new google.maps.Polygon({
    paths: fieldhouseCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  fieldhousepolygon.setMap(map);

    const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 },
  ];
  const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

    hannaPolygon.setMap(map);

  const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 },
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  CREDPolygon.setMap(map);

  const CafCoords = [

{ lat: 39.900203456792106, lng: -80.18817887398245 },
{ lat: 39.900590052054156, lng: -80.18815381174599 },
{ lat: 39.90067519885253, lng: -80.18808489059572 },
{ lat: 39.900671765515945, lng: -80.18796763513225 },
{ lat: 39.900573572016434, lng: -80.18770358656951 },
{ lat: 39.90018903667797, lng: -80.18772506848647 },
];
  const CafPolygon = new google.maps.Polygon({
    paths: CafCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  CafPolygon.setMap(map);


    const theNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211},

  ];

    const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

  nestPolygon.setMap(map);

      const cjCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    ];
    const cjHouse = new google.maps.Polygon({
        paths: cjCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });

    cjHouse.setMap(map);

 const BuhlCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

 const Buhlpolygon = new google.maps.Polygon({
        paths: BuhlCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });

    Buhlpolygon.setMap(map);

    const StoverCoords = [
    { lat: 39.899772227541916, lng: -80.18636360069222 },
    { lat: 39.89980309309625, lng: -80.18636695345333 },
    { lat: 39.89980309309625, lng: -80.18640517492993 },
    { lat: 39.89999548807153, lng: -80.18639712830327 },
    { lat: 39.89999548807153, lng: -80.18635823627444 },
    { lat: 39.90002841122172, lng: -80.18635756572223 },
    { lat: 39.90002326698055, lng: -80.18596864543396 },
    { lat: 39.89976502557723, lng: -80.18597803316504 },
    { lat: 39.899772227541916, lng: -80.18636360069222 },
    ];

     const Stoverpolygon = new google.maps.Polygon({
        paths: StoverCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c16c18",
        fillOpacity: 1.35,
    });

    Stoverpolygon.setMap(map);

    const MillerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888 }, 
    { lat: 39.89939419108494, lng: -80.18761718866978 },
    { lat: 39.89937772935947, lng: -80.18761718866978 },
    { lat: 39.89937515721452, lng: -80.18760713038564 },
    { lat: 39.899367955208106, lng: -80.1876057892811 },
    { lat: 39.89936744077903,  lng: -80.1874254107189 },
    { lat: 39.89937515721452, lng: -80.1874227285098 },
    { lat: 39.899376186072516, lng: -80.18741602298704 },
    { lat: 39.89939933537334, lng: -80.18741535243477 }, 
    { lat: 39.89939984980218, lng: -80.1872289389021 },
    { lat: 39.89955932254984, lng: -80.18723229166346 },
    { lat: 39.89956343797066, lng: -80.18743748065987 },
    { lat: 39.899593274764335, lng: -80.18743748065987 },
    { lat: 39.89959481804641, lng: -80.18759103713101 },
    { lat: 39.8995618946879, lng: -80.18759304878785 },
    { lat: 39.89956086583266, lng: -80.18779555557518 },
    { lat: 39.89939727765804, lng: -80.1877995788888 },
];
      const Millerpolygon = new google.maps.Polygon({
    paths: MillerCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

      Millerpolygon.setMap(map);

  const WileyCoords = [
  { lat: 39.89375286969348, lng: -80.18233152586367 }, 
  { lat: 39.89373172627137, lng: -80.18165911210684 },
  { lat: 39.89324965447746, lng: -80.18092607088016 },
  { lat: 39.89256037049631, lng: -80.1817087164004 },
  { lat: 39.892890212775455, lng: -80.1823811301572 },
  { lat: 39.89375286969348, lng: -80.18233152586367 },
  ];
 const Wileypolygon = new google.maps.Polygon({
    paths: WileyCoords,
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 1.35,
  });

      Wileypolygon.setMap(map);

  benedumMarker.addListener("click", () => {
    beneduminfo.open({
      anchor: benedumMarker,
      map,
      shouldFocus: false,
    });
  });

}

