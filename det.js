var option = {enableHighAccuracy: true};
window.onload = () => {
  localStorage.setItem('start', 'start');
  navigator.geolocation.getCurrentPosition(sel, del, option);
}
function sel(pos) {
  localStorage.setItem(localStorage.length, '緯度:' + pos.coords.latitude + '経度' + pos.coords.longitude + '高さ' + pos.coords.altitude);
  navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(function(stream) {}).catch(function(err) {});
  window.location.href = window.location.href;
}
function del(er) {
  navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(function(stream) {}).catch(function(err) {});
  window.location.reload();
}
