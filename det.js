var option = {enableHighAccuracy: true};
window.onload = () => {
  localStorage.setItem('start', 'start');
  navigator.geolocation.getCurrentPosition(sel, del, option);
}
function sel(pos) {
  localStorage.setItem(localStorage.length, '緯度:' + pos.coords.latitude + '経度' + pos.coords.longitude + '高さ' + pos.coords.altitude);
  window.location.reload();
}
function del(er) {
  window.location.reload();
}
