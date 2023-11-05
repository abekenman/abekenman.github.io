var start = { interval: '', fps: 0, hpb: 0, max: 0, time: 0};
onmessage = m => {
  if(m.data.title == 'start') {
    start.fps = m.data.value.fps;
    start.hpb = m.data.value.hpb;
    start.max = m.data.value.max;
    start.time = 0;
    start.interval = setInterval(() => {
      start.time++;
      postMessage({ title: 'start', value: start.hpb + start.time });
      if(start.hpb + start.time == start.max) clearInterval(start.interval)
    }, 1000 / start.fps);
  }
}
