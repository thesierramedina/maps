let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.89960750662476, lng: -80.18543716055432},
    zoom: 17,
    styles:

  [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "color": "#bf6a0f"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bf6a0f"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#c3d6d0"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "-22"
            },
            {
                "visibility": "on"
            },
            {
                "color": "#242626"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-51"
            },
            {
                "lightness": "11"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "3"
            },
            {
                "lightness": "-56"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-52"
            },
            {
                "color": "#bf6a0f"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "6.13"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "weight": "1.24"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "-10"
            },
            {
                "gamma": "0.94"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#bf6a0f"
            },
            {
                "weight": "5.40"
            },
            {
                "lightness": "7"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#bf6a0f"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#bf6a0f"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "-16"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#bf6a0f"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#bf6a0f"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "-41"
            },
            {
                "lightness": "-41"
            },
            {
                "color": "#bf6a0f"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "1.10"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "-16"
            },
            {
                "weight": "0.9"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-20"
            },
            {
                "color": "#2a4592"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#eeed6a"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#0a0808"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b7e4f4"
            },
            {
                "visibility": "on"
            }
        ]
    }
]


  });

// POLYGONS

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


// ICON MARKERS

   const benedumMarker = new google.maps.Marker({
  position: { lat: 39.90040134909528, lng: -80.1879607646066 },
  map,
  title: "Benedum",
  icon: "food.png",
  });

  const chapelMarker = new google.maps.Marker({
  position: { lat: 39.90072107517087, lng: -80.18719219716371 },
  map,
  title: "Robert's Chapel",
  icon: "chapel.png",
  });

  const eberlyMarker = new google.maps.Marker({
  position: { lat: 39.899886313351956, lng: -80.1853538057527 },
  map,
  title: "Eberly Library",
  icon: "library.png",
  });

  const GPACMarker = new google.maps.Marker({
  position: { lat: 39.89992670529011, lng: -80.18785910765499 },
  map,
  title: "Performing Arts Center",
  icon: "wu.png",
  });

  const thayerMarker = new google.maps.Marker({
  position: { lat: 39.89950932080088, lng: -80.18423058807987 },
  map,
  title: "Men's Dorm Hall",
  icon: "mdorm.png",
  });

  const stewartMarker = new google.maps.Marker({
  position: { lat: 39.89797440115859, lng: -80.18664375103789 },
  map,
  title: "Science Building",
  icon: "academic.png",
  });

  const southMarker = new google.maps.Marker({
  position: { lat: 39.90031042748359, lng: -80.18595051513515 },
  map,
  title: "Women's Dorm",
  icon: "wdorm.png",
  });

  const westMarker = new google.maps.Marker({
  position: { lat: 39.90039794277109, lng: -80.18633223363815 },
  map,
  title: "Women's Dorm",
  icon: "wdorm.png",
  });

  const eastMarker = new google.maps.Marker({
  position: { lat: 39.90038111291678, lng: -80.18552930851115 },
  map,
  title: "Women's Dorm",
  icon: "wdorm.png",
  });

  const pollockMarker = new google.maps.Marker({
  position: { lat: 39.89926360133477, lng: -80.1849808623828 },
  map,
  title: "Women's Dorm",
  icon: "wdorm.png",
  });

  const wilisonMarker = new google.maps.Marker({
  position: { lat: 39.897338207281074, lng: -80.18631468336227 },
  map,
  title: "Men's Dorm",
  icon: "mdorm.png",
  });

  const fieldhouseMarker = new google.maps.Marker({
  position: { lat: 39.89812587501044, lng: -80.18745545130403 },
  map,
  title: "Rudy Marisa Fieldhouse",
  icon: "gym.png",
  });

  const hannaMarker = new google.maps.Marker({
  position: { lat: 39.899475660647695, lng: -80.18705618252565 },
  map,
  title: "Hanna Hall",
  icon: "academic.png",
  });

  const CREDMarker = new google.maps.Marker({
  position: { lat: 39.89811914286055, lng: -80.18626642010348 },
  map,
  title: "CRED",
  icon: "academic.png",
  });

  const nestMarker = new google.maps.Marker({
  position: { lat: 39.89812924110695, lng: -80.18556002149448 },
  map,
  title: "The Nest Bookstore",
  icon: "wu.png",
  });

  const cjMarker = new google.maps.Marker({
  position: { lat: 39.900367649031175, lng: -80.18886824852969 },
  map,
  title: "CSI House",
  icon: "academic.png",
  });

  const buhlMarker = new google.maps.Marker({
  position: { lat: 39.899356976129724, lng: -80.18545807397767 },
  map,
  title: "Buhl Hall",
  icon: "academic.png",
  });

  const stoverMarker = new google.maps.Marker({
  position: { lat: 39.89992386333578, lng: -80.1861970077489 },
  map,
  title: "Stover Student Center",
  icon: "wu.png",
  });

  const millerMarker = new google.maps.Marker({
  position: { lat: 39.899491151039996, lng: -80.18754370361602 },
  map,
  title: "Miller Hall",
  icon: "wu.png",
  });

  const wileyMarker = new google.maps.Marker({
  position: { lat: 39.89321483823078, lng: -80.18168470208425 },
  map,
  title: "Wiley Stadium",
  icon: "gym.png",
  });

// INFO WINDOWS

  const beneduminfo = new google.maps.InfoWindow({
    content: "<h2>Benedum Dining Hall</h2><p>This is Waynesburg Universitys Dining Hall. Catered by Aladdin Dining Services, this Hall is open to students all week for breakfast, lunch and dinner.</p>"
  });

  benedumMarker.addListener("click", () => {
    beneduminfo.open({
      anchor: benedumMarker,
      map,
      shouldFocus: false,
    });
  });

  const eberlyinfo = new google.maps.InfoWindow({
    content: "<h2>Eberly Library</h2><p>Eberly library boasts three floors, with various study rooms and conference rooms, as well as a computer lab with printers. Students are encouraged to take advantage of the thousands of books, and hundreds of movies at their disposal.</p>"
  });

   eberlyMarker.addListener("click", () => {
    eberlyinfo.open({
      anchor: eberlyMarker,
      map,
      shouldFocus: false,
    });
  });

   const chapelinfo = new google.maps.InfoWindow({
    content: "<h2>Roberts Chapel</h2><p>Waynesburg University offers a weekly Chapel service on Tuesday morning at 11 a.m. in Roberts Chapel. This chapel was built in May 2010 and is the newest addition on campus.</p>"
  });

   chapelMarker.addListener("click", () => {
    chapelinfo.open({
      anchor: chapelMarker,
      map,
      shouldFocus: false,
    });
  });

  const GPACinfo = new google.maps.InfoWindow({
    content: "<h2><p>Goodwin Performing Arts Center</h2>The Goodwin Performing Arts Center is the home of every and all Waynesburg productions including: Fall plays, Spring musicals, One Act plays directed by students, WU’s Line, a student-led improv group, among many others.</p>"
  });

   GPACMarker.addListener("click", () => {
    GPACinfo.open({
      anchor: GPACMarker,
      map,
      shouldFocus: false,
    });
  });

   const thayerinfo = new google.maps.InfoWindow({
    content: "<h2>Thayer Hall</h2><p>Thayer Hall is an underclassmen male dorm located next to the Unity Trail on the east side of campus. Thayer Hall has three floors and an adjacent parking lot.</p>"
  });

   thayerMarker.addListener("click", () => {
    thayerinfo.open({
      anchor: thayerMarker,
      map,
      shouldFocus: false,
    });
  });

    const stewartinfo = new google.maps.InfoWindow({
    content: "<h2>Stewart</h2><p>Newly renovated Stewart Hall is the academic building where STEM majors call home. This building is full of laboratories, computer science technology and busy nursing majors!</p>"
  });

   stewartMarker.addListener("click", () => {
    stewartinfo.open({
      anchor: stewartMarker,
      map,
      shouldFocus: false,
    });
  });

    const southinfo = new google.maps.InfoWindow({
    content: "<h2>South</h2><p>South Dormitory is one of four upperclassmen women dorms here on campus. With suite style rooms, bay windows, and their own parking lot it is a nice place to live!</p>"
  });

   southMarker.addListener("click", () => {
    southinfo.open({
      anchor: southMarker,
      map,
      shouldFocus: false,
    });
  });

    const westinfo = new google.maps.InfoWindow({
    content: "<h2>West</h2><p>West Dormitory is one of four upperclassmen women dorms here on campus. With suite style rooms, bay windows, and a view of the setting sun, it is a nice place to live!</p>"
  });

   westMarker.addListener("click", () => {
    westinfo.open({
      anchor: westMarker,
      map,
      shouldFocus: false,
    });
  });

  const eastinfo = new google.maps.InfoWindow({
    content: "<h2>East</h2><p>East Dormitory is one of four upperclassmen women dorms here on campus. With suite style rooms, bay windows, and a view of the rising sun, it is a nice place to live!</p>"
  });

   eastMarker.addListener("click", () => {
    eastinfo.open({
      anchor: eastMarker,
      map,
      shouldFocus: false,
    });
  });

  const pollockinfo = new google.maps.InfoWindow({
    content: "<h2>Pollock</h2><p>Pollock Dormitory is one of four upperclassmen women dorms here on campus. With suite style rooms, private study rooms on each floor, and their own parking lot it is a nice place to live!</p>"
  });

   pollockMarker.addListener("click", () => {
    pollockinfo.open({
      anchor: pollockMarker,
      map,
      shouldFocus: false,
    });
  });

 const wilisoninfo = new google.maps.InfoWindow({
    content: "<h2>Wilison</h2><p>Wilison Hall is the only upperclassmen mens dormitory here on campus. It has six floors of suite-style rooms, and a game room housing a pool table, ping-pong table, sofas, and a large flatscreen TV. Pretty cool!</p>"
  });

   wilisonMarker.addListener("click", () => {
    wilisoninfo.open({
      anchor: wilisonMarker,
      map,
      shouldFocus: false,
    });
  });

  const fieldhouseinfo = new google.maps.InfoWindow({
    content: "<h2>Marisa Fieldhouse</h2><p>The Rudy Marisa Fieldhouse was dedicated to longtime Waynesburg Men’s Basketball coach Rudy Marisa. This gym holds a few classrooms as well as a basketball and volleyball court, and underground weight rooms.</p>"
  });

   fieldhouseMarker.addListener("click", () => {
    fieldhouseinfo.open({
      anchor: fieldhouseMarker,
      map,
      shouldFocus: false,
    });
  });

  const hannainfo = new google.maps.InfoWindow({
    content: "<h2>Hannah Hall</h2><p>Hanna Hall was the original building back in the Waynesburg College days. Nowadays it is home to various concentrations of business majors, as well as a few computer labs.</p>"
  });

   hannaMarker.addListener("click", () => {
    hannainfo.open({
      anchor: hannaMarker,
      map,
      shouldFocus: false,
    });
  });

  const CREDinfo = new google.maps.InfoWindow({
    content: "<h2>CRED</h2><p>The Center for Research and Economic Development strives to stimulate economic development in the local community through scientific research, faculty and staff expertise, resources and partnerships. It also provides state-of-the-art smart classrooms for students on campus.</p>"
  });

   CREDMarker.addListener("click", () => {
    CREDinfo.open({
      anchor: CREDMarker,
      map,
      shouldFocus: false,
    });
  });

  const nestinfo = new google.maps.InfoWindow({
    content: "<h2>The Nest/Rudys Place</h2><p>The Nest, a previous on-campus house, is a newly renovated store and hangout for students. It has a bookstore on the first floor, with the remaining two floors housing TVs, arcade games, board games, foosball, ping-pong, and more!</p>"
  });

   nestMarker.addListener("click", () => {
    nestinfo.open({
      anchor: nestMarker,
      map,
      shouldFocus: false,
    });
  });

  const cjinfo = new google.maps.InfoWindow({
    content: "<h2>Criminal Justice House</h2><p>The CSI House is the home of all things Criminal Justice on-campus. Students can come here to learn about their criminal justice courses, or for their life skills course surrounding gun safety.</p>"
  });

   cjMarker.addListener("click", () => {
    cjinfo.open({
      anchor: cjMarker,
      map,
      shouldFocus: false,
    });
  });

  const buhlinfo = new google.maps.InfoWindow({
    content: "<h2>Buhl Hall</h2><p>Buhl Hall is an academic building for the humanities and social sciences including psychology, history, english, and communication courses among others. It holds WCYJ-FM, Waynesburg University’s radio station, as well as the WCTV-14 News Studio.</p>"
  });

   buhlMarker.addListener("click", () => {
    buhlinfo.open({
      anchor: buhlMarker,
      map,
      shouldFocus: false,
    });
  });

  const stoverinfo = new google.maps.InfoWindow({
    content: "<h2>Stover Student Center</h2><p>The Stover Student Center is a 24-hour facility open to students for eating, hanging out, and the occasional class. It holds The Beehive, an MTO-style dining option, as well as the campus Starbucks, mailrooms, and a newly added 24-hr printer!</p>"
  });

   stoverMarker.addListener("click", () => {
    stoverinfo.open({
      anchor: stoverMarker,
      map,
      shouldFocus: false,
    });
  });

  const millerinfo = new google.maps.InfoWindow({
    content: "<h2>Miller Hall</h2><p>Miller Hall, nestled next to Hanna Hall, is a hub for administration on-campus. It holds Waynesburg’s Admissions and Business offices. It also holds numerous education courses on campus.</p>"
  });

   millerMarker.addListener("click", () => {
    millerinfo.open({
      anchor: millerMarker,
      map,
      shouldFocus: false,
    });
  });

  const wileyinfo = new google.maps.InfoWindow({
    content: "<h2>John F. Wiley Stadium</h2><p>Wiley Stadium, located approximately a mile off-campus, is where Waynesburg Univeristy’s home soccer and football games are played. With a view of the train tracks, and ample parking, it is always a fun place to hangout!</p>"
  });

   wileyMarker.addListener("click", () => {
    wileyinfo.open({
      anchor: wileyMarker,
      map,
      shouldFocus: false,
    });
  });
}

