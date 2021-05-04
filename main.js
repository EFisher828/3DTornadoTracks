//Basic Navigation

const openNav = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

const closeNav = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//Home Map
let extent = ol.proj.transformExtent(
  [-85.58,31.86,-74.24,36.78],
  'EPSG:4326', 'EPSG:3857'
);

var map = new ol.Map({
	target: 'map',
	controls: [],
	layers: [
	  	Counties = new ol.layer.Vector({
	  		title: 'Carolina Counties',
	  		source: new ol.source.Vector({
	  			url: 'https://raw.githubusercontent.com/EFisher828/geojson-store/main/Carolina-Counties.geojson?token=ARFGNDSGBMQPJ55SBQBORRTAQ4Y4G',
	  			format: new ol.format.GeoJSON()
	  		}),
	  		style: new ol.style.Style({
	  			fill: new ol.style.Fill({
	  				color: '#dbdbdb'
	  			}),
	  			stroke: new ol.style.Stroke({
	  				color: '#a6a6a6'
	  			})
	  		}),
	  		zIndex: 0
	  	}),
			],
	view: new ol.View({
		center: ol.proj.fromLonLat([-79.9000115996899,34.36925391733207]),
		zoom: 0,
		pixelRatio: 2,
		extent: extent,
	})
});