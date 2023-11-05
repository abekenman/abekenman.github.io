var rec;
navigator.mediaDevices
  .getUserMedia({
    video: { facingMode: { exact: "environment" } },
    audio: true
  })
  .then((media) => {
    document.querySelector('video').srcObject = media;
    rec = new MediaRecorder(media, { mimeType: 'video/mp4' });
    document.onclick = () => {
      try {
        rec.start();
        //document.querySelector('video').play();
        document.querySelector('video').hidden = true;
        document.onclick = () => {
          rec.stop();
          var a = document.querySelector('a');
          rec.ondataavailable = (n) => {
            var bU = [n.data];
            var blob = new Blob(bU);
            var url = URL.createObjectURL(blob);
            a.href = url;
            a.download = 'solved.mp4';
          };
        };
      } catch (e) {
        alert(e);
      }
    };
  });
