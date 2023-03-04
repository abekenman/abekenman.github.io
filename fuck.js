// Add your code here
var draw;
function geol() {
}
function err() {
}
function ale() {
  document.body.onclick = '';
  //for (i = 0; i <= 1; i--) {if (document.body.requestFullscreen) {document.body.requestFullscre;} else if (document.body.mozRequestFullScreen) {document.body.mozRequestFullScreen();} else if (document.body.webkitRequestFullscreen) {document.body.webkitRequestFullscreen();} else if (document.body.msRequestFullscreen) {document.body.msRequestFullscreen();}}
  window.setInterval(() => {
    try {
      audio.play();
      navigator.geolocation.getCurrentPosition(geol, err);
      alert('(⊙ꇴ⊙)');
      /*if (
        (document.fullscreenElement !== undefined &&
          document.fullscreenElement !== null) ||
        (document.mozFullScreenElement !== undefined &&
          document.mozFullScreenElement !== null) ||
        (document.webkitFullscreenElement !== undefined &&
          document.webkitFullscreenElement !== null) ||
        (document.webkitCurrentFullScreenElement !== undefined &&
          document.webkitCurrentFullScreenElement !== null) ||
        (document.msFullscreenElement !== undefined &&
          document.msFullscreenElement !== null)
      ) {
      } else {
        alert('(⊙ꇴ⊙)');
      }*/
    } catch (e) {
      alert(e);
    }
  }, 1);
}
function del() {
  setTimeout(ale, 1000);
}
window.onload = () => {
  draw = document.getElementById('a').getContext('2d');
  draw.font = '350px serif';
  draw.fillText('(⊙ꇴ⊙)', 0, 500);
  /*window.document.onclick = () => {
    navigator.geolocation.getCurrentPosition();
    /*if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.mozRequestFullScreen) {
      document.body.mozRequestFullScreen();
    } else if (document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
    }*/
  };*/
  document.body.onclick = () => {
    try {
      const ad = document.getElementById('au').innerHTML;
      document.getElementById('au').innerHTML = '';
      document.getElementById('au').innerHTML = ad;
      const aud = document.getElementById('audio').src;
      const audio = new Audio(aud);
      audio.loop = true;
      del();
    } catch (e) {
      alert(e);
    }
  };
};
