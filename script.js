// Add your code here
var canvas, draw, ip, audi, audio;
function ale() {
  try {
    document.body.onclick = '';
  } catch(e) {
    alert(e);
  }
  document.setInterval(() => {
    try {
      alert('ikuu');
      audio.play();
    } catch (e) {
      alert(e);
    }
  }, 1);
}
function del() {
  try {
    setTimeout(ale, 500);
  } catch(e) {
    alert(e);
  }
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
      alert(audio);
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
