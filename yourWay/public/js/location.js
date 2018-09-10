$(function () {
  $('#iniciar').on('click', () => {
    iniciar();
  });

  $('#parar').on('click', () => {
    parar();
  });

  function iniciar() {
    ciclo = setInterval(getLocation, 1000);
    document.getElementById("iniciar").disabled = true;
    document.getElementById("parar").disabled = false;
  }
  function parar() {
    window.stop()
    document.getElementById("iniciar").disabled = false;
    document.getElementById("parar").disabled = true;
  }
  function getLocation() {
    initMap();
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
      var x = document.getElementById("demo");
      x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
      document.getElementById("latitude").value = position.coords.latitude;
      document.getElementById("longitude").value = position.coords.longitude;
      addMacker(parseFloat(position.coords.latitude), position.coords.longitude);
      guardar();
  }
  function guardar() {
      document.form.latitude.value ;
      document.form.longitude.value; 
      document.form.submit();
  }
  function initMap() {
    var options = {
        zoom: 8,
        center: new google.maps.LatLng(6.27053, -75.57211999999998)
    }
    //new map
    map = new google.maps.Map(document.getElementById('map'), options);
  }
  function addMacker(a, b) {
    var coor = new google.maps.LatLng(a, b)
    var marker = new google.maps.Marker({
        position: coor,
        map: map
    })
  }
});
