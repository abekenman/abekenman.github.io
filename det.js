window.onload = () => {
  navigator.geolocation.getCurrentPosition(sel, del);
}
function sel(pos) {
  alert(coords.latitude);
  alert(coords.longitude);
  alert(coords.altitude);
}
function del(er) {
  alert(er);
}
