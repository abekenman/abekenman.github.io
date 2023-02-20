window.onload = () => {
  navigator.geolocation.getCurrentPosition(sel, del);
}
function sel(pos) {
  alert(pos);
}
function del(er) {
  alert(er);
}
