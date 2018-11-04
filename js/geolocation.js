// Map
var map = L.map('map', {
    minZoom: 2,
    maxZoom: 15
    });

var mainlayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYXBwbGVjYXQiLCJhIjoiY2pvMm04YTZzMGxyZjNrbnhxNmJsenZ4cCJ9.x_snv9VfaIw34bs2QBsNEQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXBwbGVjYXQiLCJhIjoiY2pvMm04YTZzMGxyZjNrbnhxNmJsenZ4cCJ9.x_snv9VfaIw34bs2QBsNEQ'
}).addTo(map);

map.setView([0, 0], 2);

var southWest = L.latLng(-89.98155760646617, -180),
northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

var studentIcon = L.icon({
    iconUrl: 'img/studentMarker.png',
    shadowUrl: 'img/markerShadow.png',

    iconSize:     [32, 32],
    shadowSize:   [32, 32], 
    iconAnchor:   [16, 32], 
    shadowAnchor: [16, 32], 
    popupAnchor:  [-1, -28] 
});

var mentorIcon = L.icon({
    iconUrl: 'img/mentorMarker.png',
    shadowUrl: 'img/markerShadow.png',

    iconSize:     [32, 32],
    shadowSize:   [32, 32], 
    iconAnchor:   [16, 32], 
    shadowAnchor: [16, 32], 
    popupAnchor:  [-1, -28] 
});