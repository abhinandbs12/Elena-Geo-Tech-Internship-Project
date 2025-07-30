const fishingZones = [
  {
    "PRN ID": "PFZ-101",
    "TOWC": "2025-07-10T06:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 13.0, "longitude": 84.5, "type": "Pelagic" },
        { "latitude": 13.2, "longitude": 84.8, "type": "Pelagic" },
        { "latitude": 13.1, "longitude": 85.0, "type": "Pelagic" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-102",
    "TOWC": "2025-07-10T08:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 11.0, "longitude": 83.5, "type": "Demersal" },
        { "latitude": 11.2, "longitude": 83.8, "type": "Demersal" },
        { "latitude": 11.1, "longitude": 84.0, "type": "Demersal" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-103",
    "TOWC": "2025-07-10T10:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 15.5, "longitude": 85.5, "type": "Mixed" },
        { "latitude": 15.7, "longitude": 85.8, "type": "Mixed" },
        { "latitude": 15.6, "longitude": 86.0, "type": "Mixed" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-104",
    "TOWC": "2025-07-10T12:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 16.0, "longitude": 84.5, "type": "Pelagic" },
        { "latitude": 16.2, "longitude": 84.8, "type": "Pelagic" },
        { "latitude": 16.1, "longitude": 85.0, "type": "Pelagic" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-105",
    "TOWC": "2025-07-10T14:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 13.8, "longitude": 83.5, "type": "Demersal" },
        { "latitude": 14.0, "longitude": 83.8, "type": "Demersal" },
        { "latitude": 13.9, "longitude": 84.0, "type": "Demersal" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-106",
    "TOWC": "2025-07-10T16:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 10.0, "longitude": 82.0, "type": "Mixed" },
        { "latitude": 10.2, "longitude": 82.3, "type": "Mixed" },
        { "latitude": 10.1, "longitude": 82.5, "type": "Mixed" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-107",
    "TOWC": "2025-07-10T18:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 14.5, "longitude": 84.5, "type": "Pelagic" },
        { "latitude": 14.7, "longitude": 84.8, "type": "Pelagic" },
        { "latitude": 14.6, "longitude": 85.0, "type": "Pelagic" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-108",
    "TOWC": "2025-07-10T20:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 17.0, "longitude": 86.0, "type": "Demersal" },
        { "latitude": 17.2, "longitude": 86.3, "type": "Demersal" },
        { "latitude": 17.1, "longitude": 86.5, "type": "Demersal" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-109",
    "TOWC": "2025-07-10T22:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 9.0, "longitude": 83.0, "type": "Mixed" },
        { "latitude": 9.2, "longitude": 83.3, "type": "Mixed" },
        { "latitude": 9.1, "longitude": 83.5, "type": "Mixed" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-110",
    "TOWC": "2025-07-11T00:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 13.0, "longitude": 84.0, "type": "Pelagic" },
        { "latitude": 13.2, "longitude": 84.3, "type": "Pelagic" },
        { "latitude": 13.1, "longitude": 84.5, "type": "Pelagic" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-115",
    "TOWC": "2025-07-11T10:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 11.0, "longitude": 83.0, "type": "Mixed" },
        { "latitude": 11.2, "longitude": 83.3, "type": "Mixed" },
        { "latitude": 11.1, "longitude": 83.5, "type": "Mixed" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-116",
    "TOWC": "2025-07-11T12:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 17.5, "longitude": 86.0, "type": "Pelagic" },
        { "latitude": 17.7, "longitude": 86.3, "type": "Pelagic" },
        { "latitude": 17.6, "longitude": 86.5, "type": "Pelagic" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-117",
    "TOWC": "2025-07-11T14:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 10.0, "longitude": 83.0, "type": "Demersal" },
        { "latitude": 10.2, "longitude": 83.3, "type": "Demersal" },
        { "latitude": 10.1, "longitude": 83.5, "type": "Demersal" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-118",
    "TOWC": "2025-07-11T16:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 13.5, "longitude": 84.5, "type": "Mixed" },
        { "latitude": 13.7, "longitude": 84.8, "type": "Mixed" },
        { "latitude": 13.6, "longitude": 85.0, "type": "Mixed" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-119",
    "TOWC": "2025-07-11T18:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 15.5, "longitude": 85.0, "type": "Pelagic" },
        { "latitude": 15.7, "longitude": 85.3, "type": "Pelagic" },
        { "latitude": 15.6, "longitude": 85.5, "type": "Pelagic" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-122",
    "TOWC": "2025-07-12T00:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 10.5, "longitude": 72.5, "type": "Pelagic" },
        { "latitude": 10.7, "longitude": 72.8, "type": "Pelagic" },
        { "latitude": 10.6, "longitude": 73.0, "type": "Pelagic" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-123",
    "TOWC": "2025-07-12T02:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 9.5, "longitude": 72.0, "type": "Demersal" },
        { "latitude": 9.7, "longitude": 72.3, "type": "Demersal" },
        { "latitude": 9.6, "longitude": 72.5, "type": "Demersal" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-124",
    "TOWC": "2025-07-12T04:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 11.0, "longitude": 73.0, "type": "Mixed" },
        { "latitude": 11.2, "longitude": 73.3, "type": "Mixed" },
        { "latitude": 11.1, "longitude": 73.5, "type": "Mixed" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-125",
    "TOWC": "2025-07-12T06:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 8.5, "longitude": 72.5, "type": "Pelagic" },
        { "latitude": 8.7, "longitude": 72.8, "type": "Pelagic" },
        { "latitude": 8.6, "longitude": 73.0, "type": "Pelagic" }
      ]
    }
  },
  {
    "PRN ID": "PFZ-126",
    "TOWC": "2025-07-12T08:00Z",
    "Potential Fishing Zone": {
      "locations": [
        { "latitude": 9.0, "longitude": 73.5, "type": "Demersal" },
        { "latitude": 9.2, "longitude": 73.8, "type": "Demersal" },
        { "latitude": 9.1, "longitude": 74.0, "type": "Demersal" }
      ]
    }
  }
];
