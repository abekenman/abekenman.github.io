window.onload = () => {
  navigator.geolocation.getCurrentPosition(sel, del);
}
function sel(pos) {
  setInterval(() => {
    alert(pos.latitude);
    alert(pos.longitude);
    alert(pos.altitude);
  }, 1000);
}
function del(er) {
  alert(er);
}
