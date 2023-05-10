// Add your code here
onload = () => {
  let width = 320; // We will scale the photo width to this
  let height = 0; // This will be computed based on the input stream

  let streaming = false;

  let video = null;
  let canvas = null;
  let photo = null;
  let startbutton = null;
  let constrains = { video: true, audio: true };
  let recorder = null;
  let record_data = [];

  /**
   * ユーザーのデバイスによるカメラ表示を開始し、
   * 各ボタンの挙動を設定する
   *
   */
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
    stopbutton = document.getElementById('stopbutton');
    downloadbutton = document.getElementById('download');

    videoStart();

    video.addEventListener(
      'canplay',
      function (ev) {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          video.setAttribute('width', width);
          video.setAttribute('height', height);
          streaming = true;
        }
      },
      false
    );

    startRecorder();

    // 「start」ボタンをとる挙動を定義
    startbutton.addEventListener(
      'click',
      function (ev) {
        ev.preventDefault();
      },
      false
    );

    stopbutton.addEventListener('click', function (ev) {
      recorder.stop();
      console.log(record_data);
      var blob = new Blob(record_data, { type: 'video/mp4' });
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display:none';
      a.href = url;
      a.download = 'download';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  /**
   * カメラ操作を開始する
   */
  function videoStart() {
    streaming = false;
    console.log(streaming);
    navigator.mediaDevices
      .getUserMedia(constrains)
      .then(function (stream) {
        video.srcObject = stream;
      video.play();
      })
      .catch(function (err) {
        console.log('An error occured! ' + err);
      });
  }

  function startRecorder() {
    navigator.mediaDevices.getUserMedia(constrains).then(function (stream) {
      recorder = new MediaRecorder(stream, {audioBitsPerSecond : 128000, videoBitsPerSecond : 2500000, mimeType: 'video/mp4'});
      recorder.start();
      recorder.ondataavailable = function (e) {
        var testvideo = document.getElementById('test');
        testvideo.setAttribute('controls', '');
        testvideo.setAttribute('width', width);
        testvideo.setAttribute('height', height);
        var outputdata = window.URL.createObjectURL(e.data);
        record_data.push(e.data);
        testvideo.src = outputdata;
      };
    });
  }

  startup();
};
