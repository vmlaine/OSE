var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
   // todo
   earth.setView([61.20264363861154,26.031697338485174]);
   earth.setZoom(13);
}

function showCoords() {
   alert(earth.getCenter());

}