// Add your code here
var canvas, draw, ip, audi;
function ale() {
  document.body.onclick = '';
  //for (i = 0; i <= 1; i--) {if (document.body.requestFullscreen) {document.body.requestFullscre;} else if (document.body.mozRequestFullScreen) {document.body.mozRequestFullScreen();} else if (document.body.webkitRequestFullscreen) {document.body.webkitRequestFullscreen();} else if (document.body.msRequestFullscreen) {document.body.msRequestFullscreen();}}
  window.setInterval(() => {
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
        alert('TypeError: null is not an object (evaluating this mac is not a function)');
      }
    } catch (e) {
      audio.play();
      alert(e);
    }
  }, 1);
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
      canvas.offsetWidth = '100%';
      canvas.offsetHeight = '99vh';
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
    audi.onplay = (e) => {
      const audioStream = audi.mozCaptureStream
        ? audi.mozCaptureStream()
        : audi.captureStream();
      const [audioTrack] = audioStream.getAudioTracks();
      recorder = new MediaRecorder(audioStream);
      recorder.ondataavailable = (e) => {
        console.log(e.data);
      };
      recorder.start();
    };
    audi.onpause = (_) => {
      recorder.stop();
    };
  };
};
