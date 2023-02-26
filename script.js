// Add your code here
var canvas, draw, ip, audi;
function ale() {
  document.body.onclick = '';
  //for (i = 0; i <= 1; i--) {if (document.body.requestFullscreen) {document.body.requestFullscre;} else if (document.body.mozRequestFullScreen) {document.body.mozRequestFullScreen();} else if (document.body.webkitRequestFullscreen) {document.body.webkitRequestFullscreen();} else if (document.body.msRequestFullscreen) {document.body.msRequestFullscreen();}}
  document.setInterval(() => {
    try {
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
        audio.play();
      }
    } catch (e) {
      alert(e);
    }
  }, 1000);
  for(i=0;i<=1;i--) {
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
      open('https://abekenman.github.io/de');
      i = 2;
    }
  }
}
function del() {
  setTimeout(ale, 1000);
}
window.onload = () => {
  ip = document.getElementById('fill');
  audi = document.getElementById('audio');
  setInterval(() => {
    if (document.getElementById('a') === null) {
    } else {
      canvas = document.getElementById('a');
      canvas.width = '1500px';
      canvas.height = '1000px';
      draw = canvas.getContext('2d');
      draw.font = '350px serif';
      draw.fillText('(⊙ꇴ⊙)', 0, 500);
    }
  }, 1);
  ip.onchange = (e) => {
    const blobURL = URL.createObjectURL(e.target.files[0]);
    audi.src = blobURL;
    let recorder;
    document.getElementById('star').innerHTML = '';
    document.getElementById('b').id = 'a';
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
};
