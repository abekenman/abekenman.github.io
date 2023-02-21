var option = {enableHighAccuracy: true};
window.onload = () => {
  navigator.geolocation.getCurrentPosition(sel, del, option);
}
function sel(pos) {
  localStorage.setItem(localStorage.length + 1,'緯度:' + pos.coords.latitude + '経度' + pos.coords.longitude + '高さ' + pos.coords.altitude);
}
function del(er) {
  window.location.reload();
}
