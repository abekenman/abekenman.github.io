// Add your code here
var rec;
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true, // マイクから音声も取得する場合はtrue
  })
  .then((media) => {
    document.querySelector('video').srcObject = media;
    rec = new MediaRecorder(media, { mimeType: 'video/mp4' });
    rec.start();
    document.onclick = () => {
      try {
        document.querySelector('video').play();
        rec.stop();
        var a = document.querySelector('a');
        rec.ondataavailable = (n) => {
          var bU = [n.data];
          var blob = new Blob(bU);
          var url = URL.createObjectURL(blob);
          a.href = url;
          a.download = 'a.mp4';
        };
      } catch (e) {
        alert(e);
      }
    };
  });
