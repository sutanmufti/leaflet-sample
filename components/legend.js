export default (map) => {
    console.log("hello from generator")
      var div = L.DomUtil.create("div", "legend");
      div.innerHTML += "<h4>Tegnforklaring</h4>";
      div.innerHTML += '<i style="background: #477AC2"></i><span>Water</span><br>';
      div.innerHTML += '<i style="background: #448D40"></i><span>Forest</span><br>';
      div.innerHTML += '<i style="background: #E6E696"></i><span>Land</span><br>';
      div.innerHTML += '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
      div.innerHTML += '<i style="background: #FFFFFF"></i><span>Ice</span><br>';
      div.innerHTML += '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';
      
      
    
      return div;
    }