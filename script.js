// Add your code here
var canvas, draw, ip, audi, audio, eType, video;
function ale() {
  window.setInterval(() => {
    try {
      video.pause();
      addEventListener('focus', () => {
        audio.play();
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        } else {
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          }
        }
      });
    }
    } catch (e) {
      alert(e);
    }
  }, 1);
}
async function del() {
  document.body.onclick = () => ale();
  open('https://abekenman.github.io/empty');
  setTimeout(ale, 500);
}
window.onload = () => {
  try {
    alert('');
    ip = document.getElementById('fill');
    audi = document.getElementById('audio');
  } catch (e) {
    alert(e);
  }
  ip.onchange = (e) => {
    try {
      alert('');
      const blobURL = URL.createObjectURL(e.target.files[0]);
      document.getElementById('star').innerHTML = '';
      document.getElementById('b').id = 'a';
      audio = new Audio(blobURL);
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
        video.play();
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
