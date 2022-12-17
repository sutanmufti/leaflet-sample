// initialise the map!
const map = L.map('map').setView([51.505, -0.09], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



// ADDING THE GEOJSON DATA
// importing the geojson data as a module.
import {picadilly as data} from "./data/underground/picadilly.js"


// ---- PREPARING SOME CALLBACKS
// setting up the popup for each point that we are importing
const onEachFeature = (feature, layer) => {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties["Name"]) {
        layer.bindPopup(feature.properties["Name"]);
    }
}

const pointToLayer = (feature, latlng) => {
    const label = String(feature.properties["Name"])
    return L.circleMarker(latlng, 
                            {
                                radius : 8,
                                fillColor : "#003688",
                                color : "#000",
                                weight : 1,
                                opacity : 1,
                                fillOpacity : 0.8
                            })
                            .bindTooltip(label, {permanent: true, 
                                direction: "center",
                                className: "my-labels"}).openTooltip()
}
// ----- CALBACKS PREPARED


// ADDING THE GEOJSON TO MAP
L.geoJSON(data,{
        // applying popup on each feature
        onEachFeature: onEachFeature,
        // point data is special, we should use this special option
        pointToLayer : pointToLayer
                }).addTo(map);
    
    
    
// ADDING THE LEGEND-- manually/ hardcoded
// don't forget to add CSS
// https://codepen.io/haakseth/pen/KQbjdO
// first we initiate a section in bottom left,
var legend = L.control({ position: "bottomleft" });

// we import the callback that returns a div containing our legend
import LegendCallback from "./components/legend.js"

// when we add the section, the callback will be called
legend.onAdd = LegendCallback;
// addTo will execute the onAdd, and our callback is called generating the legend
legend.addTo(map);