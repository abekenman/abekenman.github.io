// Add your code here
var draw;
function ale() {
  document.body.onclick = '';
  //for (i = 0; i <= 1; i--) {if (document.body.requestFullscreen) {document.body.requestFullscre;} else if (document.body.mozRequestFullScreen) {document.body.mozRequestFullScreen();} else if (document.body.webkitRequestFullscreen) {document.body.webkitRequestFullscreen();} else if (document.body.msRequestFullscreen) {document.body.msRequestFullscreen();}}
  window.setInterval(() => {
    try {
      requestanimationframe();
      audio.play();
      if (
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
        alert('逃さん');
      }
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
  draw.fillText('逃さん', 0, 500);
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
  window.document.onclick = () => {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.mozRequestFullScreen) {
      document.body.mozRequestFullScreen();
    } else if (document.body.webkitRequestFullscreen) {
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) {
      document.body.msRequestFullscreen();
    }
  };
};
