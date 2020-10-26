// Tile layers

// Satellite layer
let satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Streets layer
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Base layer
let baseMaps = {
    "Satellite": satellite,
    "Streets": streets
};

// Map object
let map = L.map("map", {
    center: [53.58, -113.5],
    zoom: 11,
    layers: [satellite]
});

// Pass layers into layers control & add to map
L.control.layers(baseMaps).addTo(map);

// Markers
var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

L.marker([53.601391, -113.372253], {icon: redIcon}).addTo(map)
  .bindPopup('<h6>Clareview Stairs</h6><b>Lat, Long:</b> 53.601391, -113.372253<br><b>Stair Count:</b> 111');

L.marker([53.558961, -113.442285], {icon: redIcon}).addTo(map)
  .bindPopup('<h6>Concordia College Stairs</h6><b>Lat, Long:</b> 53.558961, -113.442285<br><b>Stair Count:</b> 244');

L.marker([53.534811, -113.468342], {icon: redIcon}).addTo(map)
  .bindPopup('<h6>Connors Hill Stairs</h6><b>Lat, Long:</b> 53.534811, -113.468342<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipPUFPFcXJGAPeJo19donSHjeKPOoYGBXM5wDNM3=s1536" onclick="openModal();currentSlide(1)">');

L.marker([53.538805, -113.489561], {icon: redIcon}).addTo(map)
    .bindPopup('<h6>Fairmont Hotel Macdonald Stairs</h6><b>Lat, Long:</b> 53.538805, -113.489561<br><b>Stair Count:</b> 201-204<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipM8OXLE3BBQieyqk2Rvk_obHT7BO1o4n6PeFA1b=s1536" onclick="openModal();currentSlide(2)">');

L.marker([53.532510, -113.511644], {icon: redIcon}).addTo(map)
    .bindPopup('<h6>Glenora/Ezio Faraone Stairs</h6><b>Lat, Long:</b> 53.532510, -113.511644<br><b>Stair Count:</b> 186-202<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipNg2j_QXBAkb293oMVMYCKK7hnjxIV2KoacEXZ-=s1536" onclick="openModal();currentSlide(3)">');

L.marker([53.501849, -113.559412], {icon: redIcon}).addTo(map)
    .bindPopup('<h6>Grandview/Whitemud Park Stairs</h6><b>Lat, Long:</b> 53.501849, -113.559412<br><b>Stair Count:</b> 242-261<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipMueO4d4TXGYfSOwsd6SVKSoQkeeTQ_9RuWXHww=s1536" onclick="openModal();currentSlide(4)">');

L.marker([53.508143, -113.566463], {icon: redIcon}).addTo(map)
    .bindPopup('<h6>Laurier Drive Stairs</h6><b>Lat, Long:</b> 53.508143, -113.566463<br><b>Stair Count:</b> 165');

L.marker([53.499416, -113.592445], {icon: redIcon}).addTo(map)
    .bindPopup('<h6>Wolf Willow Stairs</h6><b>Lat, Long:</b> 53.499416, -113.592445<br><b>Stair Count:</b> 200-201<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipNII55xNMEPfgUTKqD4pTAX5cmiizsyMlXJATFm=s1536" onclick="openModal();currentSlide(5)">');

// Modal

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].className = slides[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].className += " active";
    captionText.innerHTML = slides[slideIndex-1].id;
}