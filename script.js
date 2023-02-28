// Add your code here
var canvas, draw, ip, audi, audio;
function ale() {
  document.body.onclick = '';
  document.setInterval(() => {
    try {
      audio.play();
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
    alert('a');
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
    document.body.onclick = () => {
      try {
        del();
      } catch (ie) {
        alert(ie);
      }
    };
  };
  window.setInterval(() => {
    if (document.getElementById('a') === null) {
    } else {
      canvas = document.getElementById('a');
      draw = canvas.getContext('2d');
      draw.font = '350px serif';
      draw.fillText('(⊙ꇴ⊙)', 0, 500);
    }
  }, 1);
};
