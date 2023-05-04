// Add your code here
var canvas, draw, ip, audi, audio, eType, video, cleset;
var nff = false;
function alo() {
  clearInterval(cleset);
  window.setInterval(() => {
    video.pause();
    audio.play();
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      if (document.body.requestFullscreen) {
        document.body.requestFullscreen();
      } else if (document.body.mozRequestFullScreen) {
        document.body.mozRequestFullScreen();
      } else if (document.body.webkitRequestFullscreen) {
        document.body.webkitRequestFullscreen();
      } else if (document.body.msRequestFullscreen) {
        document.body.msRequestFullscreen();
      } else {
      }
    }
    audio.play();
  }, 1);
}   
function ale() {
  cleset = window.setInterval(() => {
    try {
      if (document.body.requestFullscreen) {
        document.body.requestFullscreen();
      } else if (document.body.mozRequestFullScreen) {
        document.body.mozRequestFullScreen();
      } else if (document.body.webkitRequestFullscreen) {
        document.body.webkitRequestFullscreen();
      } else if (document.body.msRequestFullscreen) {
        document.body.msRequestFullscreen();
      } else {
      }
      video.pause();
      if(nff == true) {
        audio.play();
        setTimeout(() => {
          alo();
        }, 500);
      } else {
        window.onfocus = () => {
          nff = true;
        });
      }
    } catch (e) {
      alert(e);
    }
  }, 1);
}
window.onload = () => {
  try {
    ip = document.getElementById('fill');
    audi = document.getElementById('audio');
  } catch (e) {
    alert(e);
  }
  ip.onchange = (e) => {
    try {
      const blobURL = URL.createObjectURL(e.target.files[0]);
      document.getElementById('star').innerHTML = '';
      document.getElementById('b').id = 'a';
      audi.src = blobURL;
      audio = new Audio(document.querySelector('audio').src);
      eType = e.target.files[0].type;
      video = document.querySelector('video');
    } catch (ie) {
      alert(ie);
    }
    window.document.onclick = () => {
      try {
        //navigator.geolocation.getCurrentPosition(geol, er);
      } catch(ie) {
        alert(ie);
      }
    }
    document.body.onclick = () => {
      try {
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
      } catch(iee) {
        alert(iee);
      }
      /*
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
      */
      //video.requestPictureInPicture();
    };
  };
  window.setInterval(() => {
    try {
      if (document.getElementById('a') == null) {
      } else {
        canvas = document.getElementById('a');
        if(canvas.hidden == true) canvas.hidden = false;
        draw = canvas.getContext('2d');
        draw.font = '350px serif';
        draw.fillText('(⊙ꇴ⊙)', 0, 500);
      }
    } catch(e) {
    }
  }, 1);
};
async function del() {
  document.body.onclick = () => {alo();};
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
  open('https://abekenman.github.io/empty');
  setTimeout(ale, 500);
}
