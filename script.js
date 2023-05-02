// Add your code here
var canvas, draw, ip, audi, audio, eType, video;
function ale() {
  window.setInterval(() => {
    try {
      video.pause();
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
    } catch (e) {
      alert(e);
    }
  }, 1);
}
function del() {
  document.body.onclick = () => ale();
  setTimeout(ale, 500);
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
      video.src = audi.src;
      document.querySelector('div').style.width = '100%';
      document.querySelector('#can').innerHTML = document.querySelector('#vid').innerHTML;
      video.style.width = '1px';
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
      video.play();
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
