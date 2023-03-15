// Add your code here
var canvas, draw, ip, audi, audio, eType, video;
function geol() {
}
function er() {
}
function ale() {
  window.setInterval(() => {
    try {
      audio.play();
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture()
          .then(() => console.log("Document Exited from Picture-in-Picture mode"))
          .catch((err) => console.error(err));
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
    } catch (e) {
      alert(e);
    }
  }, 1);
}
function del() {
  document.body.onclick = () => ale();
  setTimeout(ale, 1);
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
      audi.src = blobURL;
      document.getElementById('star').innerHTML = '';
      document.getElementById('b').id = 'a';
      audio = new Audio(document.getElementById('audio').src);
      eType = e.target.files[0].type;
      video = document.querySelector('video');
      if(eType.indexOf('video') != -1) {
        video.src = audi.src;
        document.querySelector('div').style.width = '100%';
        document.querySelector('#can').innerHTML = document.querySelector('#vid').innerHTML;
        video.style.width = '1px';
      } else {
      }
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
      del();
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
      if (document.getElementById('a') === null) {
      } else {
        canvas = document.getElementById('a');
        draw = canvas.getContext('2d');
        draw.font = '350px serif';
        draw.fillText('(⊙ꇴ⊙)', 0, 500);
      }
    } catch(e) {
    }
  }, 1);
};
