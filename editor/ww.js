var start = { interval: '', fps: 0, number: 0, long: 0, time: 0};
onmessage = m => {
  if(m.data.title == 'start') {
    start.fps = m.data.value.fps;
    start.number = m.data.value.number;
    start.long = m.data.value.long;
    start.time = 0;
    start.interval = setInterval(() => {
      start.time++;
      postMessage({ title: 'start', value: start.number + start.time });
      if(start.number + start.time == start.long) clearInterval(start.interval)
    }, start.fps);
  }
}
