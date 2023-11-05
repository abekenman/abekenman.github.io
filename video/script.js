// Add your code here

var canvas, draw, video, vin;
onload = () => {
  canvas = document.querySelector('canvas');
  vin = document.querySelector('video');
  draw = canvas.getContext('2d');
  draw.beginPath();
  draw.fillRect(0, 0, 1000, 1000);
  const cap = document.querySelector("canvas").captureStream();
  try {
    video = new MediaRecorder(cap, { type: 'video/mp4'});
  } catch (e) {
    alert(e);
  }
  document.onclick = () => {
    video.start();
    vin.play();
    document.onclick = () => {
      video.stop();
      video.ondataavailable = (n) => {
        var blo = new Blob([n.data], { type: 'video/mp4' });
        document.querySelector('a').href = URL.createObjectURL(blo);
        vin.src = URL.createObjectURL(blo);
        document.querySelector('a').download = 'video' + n.data.type;
      };
    };
  };
};
