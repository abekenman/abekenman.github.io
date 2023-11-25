// Add your code here
var ip, audi, audio, eType, video, cleset, br;
var nff = false;
function alo() {
  try {
    clearInterval(cleset);
    window.setInterval(() => {
      video.pause();
      function ran(rdm) {
        br = '' + '\n';
        for (i = 0; i <= rdm; i++) br += '' + '\n';
        return br;
      }
      alert(ran(Math.random() * 30));
      audio.play();
    }, 1);
  } catch (e) {
    alert(e);
  }
}   
function ale() {
  setTimeout(() => {
    cleset = setInterval(() => {
      try {
        if(nff == true) {
          audio.play();
          alo();
        } else {
          onfocus = () => {
            nff = true;
          }
        }
      } catch (e) {
        alert(e);
      }
    }, 1);
  }, 500);
}
window.onload = () => {
  navigator.serviceWorker.register('manifest.js');
  ip = document.getElementById('fill');
  audi = document.getElementById('audio');
  ip.onchange = (e) => {
    const blobURL = URL.createObjectURL(e.target.files[0]);
    document.getElementById('main').innerHTML = '';
    audi.src = blobURL;
    audio = new Audio(document.querySelector('audio').src);
    eType = e.target.files[0].type;
    video = document.querySelector('video');
    document.onclick = () => {
    }
    document.body.onclick = () => {
      audio.play();
      audio.pause();
      video.play();
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else {
      }
      del();
    };
  };
};
function del() {
  document.body.onclick = alo();
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
  }
  video.pause();
  setTimeout(ale, 0);
  open('https://abekenman.github.io/empty');
}
