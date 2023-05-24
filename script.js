// Add your code here
var ip, audi, audio, eType, video, cleset;
var nff = false;
function alo() {
  try {
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
    }, 1);
  } catch (e) {
    alert(e);
  }
}   
function ale() {
  setTimeout(() => {
    cleset = window.setInterval(() => {
      try {
        if(nff == true) {
          audio.play();
          alo();
        } else {
          window.onfocus = () => {
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
};
async function del() {
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
