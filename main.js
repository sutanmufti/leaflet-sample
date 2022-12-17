
        import {picadilly as data} from "./data/underground/picadilly.js"


        var map = L.map('map').setView([51.505, -0.09], 11);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties["Name"]) {
            layer.bindPopup(feature.properties["Name"]);
        }
    }
    
    
    L.geoJSON(data,{
        
        onEachFeature: onEachFeature,
        pointToLayer : function(feature, latlng) {
                        const label = String(feature.properties["Name"])
    
                        return L.circleMarker(latlng, {
                            radius : 8,
                            fillColor : "#003688",
                            color : "#000",
                            weight : 1,
                            opacity : 1,
                            fillOpacity : 0.8
                        }).bindTooltip(label, {permanent: true, 
       direction: "center",
       className: "my-labels"}).openTooltip()
                    }
        
    }).addTo(map);
    
    
    
    /*Legend specific*/
    // first we initiate a section in bottom left,
    var legend = L.control({ position: "bottomleft" });
    
    // we import the callback that returns a div containing our legend
    import LegendCallback from "./components/legend.js"

    // when we add the section, the callback will be called
    legend.onAdd = LegendCallback;
    // addTo will execute the onAdd, and our callback is called generating the legend
    legend.addTo(map);