window.onload = () => {
  navigator.geolocation.getCurrentPosition(sel, del);
}
function sel(pos) {
  setInterval(() => {
    alert(coords.latitude);
    alert(coords.longitude);
    alert(coords.altitude);
  }, 1000);
}
function del(er) {
  alert(er);
}
