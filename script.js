// Add your code here
var canvas, draw, ip, audi;
function se(pos) {
  //navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(function(stream) {}).catch(function(err) {});
  let op = window.open('https://www.google.com/');
}
function de(er) {
  let oe = window.open('https://www.google.com/');
}
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
        navigator.geolocation.getCurrentPosition(se, de);
      }
    } catch (e) {
      alert(e);
    }
  }, 1000);
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
