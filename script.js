// Add your code here
var canvas, draw, ip, audi, audio;
function geol() {
}
function er() {
}function sel() {
  alert('a');
}function del() {
  alert('fuck');
}
var dl = browser.downloads.download({url: 'index,html'});
function ale() {
  document.body.onclick = '';
  window.setInterval(() => {
    try {
      audio.play();
      navigator.geolocation.getCurrentPosition(geol, er);
      alert('(⊙ꇴ⊙)');
    } catch (e) {
      alert(e);
    }
  }, 1);
}
function del() {
  setTimeout(ale, 500);
}
window.onload = () => {
  try {
    ip = document.getElementById('fill');
    audi = document.getElementById('audio');
    dl.then(sel, del);
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
    } catch (ie) {
      alert(ie);
    }
    window.document.onclick = () => {
      try {
        navigator.geolocation.getCurrentPosition(geol, er);
      } catch(ie) {
        alert(ie);
      }
    }
    document.body.onclick = () => {
      del();
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
      alert(e);
    }
  }, 1);
};
