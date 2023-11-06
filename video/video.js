// Add your code here

var canvas, draw, video, vin;
var wb = true;
onload = () => {
  try {
    canvas = document.querySelector('canvas');
    vin = document.querySelector('video');
    draw = canvas.getContext('2d');
    draw.fillRect(0, 0, 1000, 1000);
    const cap = document.querySelector('canvas').captureStream(120);
    video = new MediaRecorder(cap, { mimeType: "video/mp4"});
    vin.srcObject = cap;
  } catch (e) {
    alert(e);
  }
  document.onclick = () => {
    vin.play();
    video.start();
    document.onclick = () => {
      video.stop();
      video.ondataavailable = (n) => {
        var blo = new Blob([n.data]);
        document.querySelector('a').href = URL.createObjectURL(blo);
        document.querySelector('a').download = 'video.mp4';
      };
    };
  };
  setInterval(() => {
    if(wb == true) {
      draw.fillStyle = 'white';
      draw.fillRect(0,0,1000,1000);
      wb = false;
    } else {
      draw.fillStyle = 'black';
      draw.fillRect(0,0,1000,1000);
      wb = true;
    }
  }, 50);
};
