function initializeMap() {
    if (!userLocation) {
        setTimeout(initializeMap, 500);
        return;
    }

    map = L.map('map', {
        center: [userLocation.lat, userLocation.lng],
        zoom: 8,
        zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: ''
    }).addTo(map);

    layers = {
        boundary: new L.LayerGroup(),
        fishing: new L.LayerGroup(),
        cyclone: new L.LayerGroup(),
        highway: new L.LayerGroup(),
        datsg: new L.LayerGroup(),
        tides: new L.LayerGroup(),
        location: new L.LayerGroup(),
        restricted: new L.LayerGroup(),
    };
    // 🚫 Restricted Areas
const restrictedAreas = [
  {
    name: "Marine Protected Zone A",
    coordinates: [
      [15.2, 73.4],
      [15.6, 73.8],
      [16.0, 73.6],
      [15.8, 73.2],
      [15.4, 73.1]
    ]
  },
  {
    name: "Fishing Prohibited Zone B",
    coordinates: [
      [11.2, 81.2],
      [11.4, 81.6],
      [11.9, 81.5],
      [12.1, 81.2],
      [11.8, 80.9],
      [11.3, 81.0]
    ]
  },
  {
    name: "Sensitive Coral Reef Area",
    coordinates: [
      [8.5, 78.7],
      [8.7, 79.0],
      [9.0, 78.9],
      [9.1, 78.5],
      [8.8, 78.3],
      [8.6, 78.4]
    ]
  }
];


// Style for restricted polygons
const restrictedPolygonStyle = {
    color: '#d32f2f',
    fillColor: '#f44336',
    fillOpacity: 0.4
};

// Add polygons to restricted layer
restrictedAreas.forEach(area => {
    const polygon = L.polygon(area.coordinates, restrictedPolygonStyle)
        .bindPopup(`
            <b>🚫 Restricted Area</b><br>
            ${area.name}<br>
            Status: <i>No Entry Zone</i>
        `);
    layers.restricted.addLayer(polygon);
});



    // 📍 Current Location
    const customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/149/149060.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    const locationMarker = L.marker([userLocation.lat, userLocation.lng], { icon: customIcon });
    locationMarker.bindPopup('<b>Your Current Location</b><br>Live position tracking');
    layers.location.addLayer(locationMarker);

    // 🧭 Maritime Boundary
const indianOceanBoundary = [
  // Arabian Sea
  [21.0, 60.0],    // NW Arabian Sea
  [15.0, 60.5],    // Arabian Sea west of India
  [10.0, 62.0],    // Near Lakshadweep
  [6.0, 66.0],     // SW of Lakshadweep
  [0.0, 75.0],     // South of Sri Lanka
  [2.0, 82.0],     // SE Bay of Bengal
  [6.0, 87.0],     // SE Bay of Bengal
  [10.0, 92.0],    // Andaman & Nicobar SE
  [12.0, 95.0],    // Off Nicobar EEZ
  [15.0, 95.0],    // NE Bay of Bengal (Andaman area)
  [20.0, 92.0],    // Near Myanmar
  [22.0, 90.0],    // Bangladesh coast
];

const boundary = L.polygon(indianOceanBoundary, {
  color: '#0ea5e9',   // outline color
  weight: 2,          // line thickness
  opacity: 1,         // line fully visible
  fillOpacity: 0      // no fill
}).bindPopup('<b> Indian Maritime Area</b>');

layers.boundary.addLayer(boundary);


  // 🐟 Fishing Zones (PFZ)
const fishIcon = L.divIcon({
    className: 'fishing-marker',
    html: '<div style="font-size: 20px;">🐟</div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
});

const seenPFZ = new Set();
fishingZones.forEach(zone => {
    const pfz = zone["Potential Fishing Zone"];
    if (!pfz || !pfz.locations || pfz.locations.length === 0) return;

    const polygonCoords = [];

    pfz.locations.forEach(loc => {
        const key = `${loc.latitude},${loc.longitude}`;
        if (seenPFZ.has(key)) return;
        seenPFZ.add(key);

        // Collect coordinates for polygon
        polygonCoords.push([loc.latitude, loc.longitude]);

        // Create emoji marker
        const popup = `
            <b>🐟 Potential Fishing Zone</b><br>
            Type: ${loc.type}<br>
            Time: ${zone.TOWC}<br>
            Lat: ${loc.latitude}, Lng: ${loc.longitude}<br>
            PRN ID: ${zone["PRN ID"]}
        `;
        const marker = L.marker([loc.latitude, loc.longitude], { icon: fishIcon }).bindPopup(popup);
        layers.fishing.addLayer(marker);
    });

    // If we have at least 3 points, draw polygon
    if (polygonCoords.length >= 3) {
        const polygon = L.polygon(polygonCoords, {
            color: '#f57c00',
            fillColor: '#ff9800',
            fillOpacity: 0.2,
            weight: 2
        }).bindPopup('<b>🐟 PFZ Area</b><br>Potential Fishing Zone boundary');
        layers.fishing.addLayer(polygon);
    }
});


    // 🌀 Cyclone Warnings
    const cycloneIcon = L.divIcon({
        className: 'cyclone-marker',
        html: '<div style="font-size: 20px;">🌀↘</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    cycloneWarnings.forEach(entry => {
        const c = entry.CW1_Message;
        const marker = L.marker(
            [c.Latitude, c.Longitude],
            { icon: cycloneIcon }
        ).bindPopup(`
            <b>${entry.Service_ID}</b><br>
            Port: ${entry.Port_Name_1}<br>
            System: ${c.System_Category} (${c.System_Name})<br>
            Location: ${c.Location_Code}<br>
            Date/Time: ${c.Date} ${c.Time}<br>
            Direction: ${c.Direction_Full} (${c.Direction} ${c.Direction_Arrow}, ${c.Direction_Bearing_Degrees}&deg;)<br>
            Distance: ${c.Distance_nm} nm<br>
            Wind: ${c.Max_Wind_Speed_kmph} km/h<br>
            Waves: ${c.Max_Wave_Height_m} m<br>
            Current: ${c.Max_Current_Speed_mps} m/s<br>
            <i>${c.Advice_Code}</i>
        `);
        layers.cyclone.addLayer(marker);
    });


    // 🛰️ DATSG Messages
    const datsgIcon = L.divIcon({
        className: 'datsg-marker',
        html: '<div style="font-size: 20px;">🛰️</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
    datsgData.forEach((entry, index) => {
        const msg = entry["DAT Response"];
        const messageText =
            msg["Text Message"] || msg["Emergency Message"] || msg["Control Word"] || "No message";

        const popup = `
            <b>📡 DATSG Message</b><br>
            Time: ${entry.TOWC}<br>
            Terminal ID: ${msg["Terminal Id"]}<br>
            Type: ${msg["Control Word"]}<br>
            Message: ${messageText}<br>
            PRN ID: ${entry["PRN ID"]}
        `;

        // Offset latitude to avoid overlap
        const lat = 13.08 + (index * 0.01);
        const lng = 80.27;

        const marker = L.marker([lat, lng], { icon: datsgIcon }).bindPopup(popup);
        layers.datsg.addLayer(marker);
    });

    // 🌊 High Tide Zones (Example Data — you can replace this)
    const highTideZones = [
        { lat: 16.87, lng: 82.01, name: 'Kakinada', height: '2.5 m' },
        { lat: 8.48, lng: 76.95, name: 'Trivandrum', height: '2.1 m' }
    ];
    const tideIcon = L.divIcon({
        className: 'tide-marker',
        html: '<div style="font-size: 20px;">🌊</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
    });
    highTideZones.forEach(tide => {
        const marker = L.marker([tide.lat, tide.lng], { icon: tideIcon }).bindPopup(`
            <b>🌊 ${tide.name}</b><br>
            High Tide Alert<br>
            Height: ${tide.height}<br>
            Status: <i>Active High Tide Zone</i>
        `);
        layers.tides.addLayer(marker);
        layers.highway.addLayer(marker); // highway overlay includes tides
    });
     
    updateNotificationBadge(notificationCount);
    updateMapLayers();
}
   

