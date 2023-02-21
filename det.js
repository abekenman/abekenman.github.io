var option = {enableHighAccuracy: true};
window.onload = function start() {
  navigator.geolocation.getCurrentPosition(sel, del, option);
}
function sel(pos) {
  setInterval(() => {
    alert(pos.coords.latitude);
    alert(pos.coords.longitude);
    alert(pos.coords.altitude);
  }, 1000);
}
function del(er) {
  start();
}
