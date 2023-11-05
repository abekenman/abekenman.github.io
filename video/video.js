// Add your code here

var canvas, draw, video, vin;
onload = () => {
  try {
    canvas = document.querySelector('canvas');
    vin = document.querySelector('video');
    draw = canvas.getContext('2d');
    draw.fillRect(0, 0, 1000, 1000);
    const cap = document.querySelector('video').captureStream();
    video = new MediaRecorder(cap, { mimeType: 'video/mp4'});
    vin.srcObject = cap;
  } catch (e) {
    alert(e);
  }
  document.onclick = () => {
    vin.play();
    video.start();
    document.onclick = () => {
      video.stop();
      vin.pause();
      video.ondataavailable = (n) => {
        var blo = new Blob([n.data], { type: 'video/mp4' });
        document.querySelector('a').href = URL.createObjectURL(blo);
        document.querySelector('a').download = 'video' + n.data.type;
      };
    };
  };
};
