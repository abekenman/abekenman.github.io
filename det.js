window.onload = () => {
  navigator.geolocation.getCurrentPosition(sel, del);
}
function sel(pos) {
  setInterval(() => {
    alert(pos.coords.latitude);
    alert(pos.coords.longitude);
    alert(pos.coords.altitude);
  }, 1000);
}
function del(er) {
  alert(er);
}
