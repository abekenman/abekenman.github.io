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
      draw = canvas.getContext('2d');
      draw.font = '350px serif';
      draw.fillText('(⊙ꇴ⊙)', 0, 500);
    }
  }, 1);
  ip.onchange = (e) => {
    const blobURL = URL.createObjectURL(e.target.files[0]);
    audi.src = blobURL;
    document.getElementById('star').innerHTML = '';
    document.getElementById('b').id = 'a'; 
    document.body.onclick = () => {
      try {
        const ad = document.getElementById('au').innerHTML;
        document.getElementById('au').innerHTML = '';
        document.getElementById('au').innerHTML = ad;
        const aud = document.getElementById('audio').src;
        audio = new Audio(aud);
        audio.loop = true;
        del();
      } catch (e) {
        alert(e);
      }
    };
  };
};
