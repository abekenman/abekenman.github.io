var start = { interval: 0, number: 0, long: 0, time: 0};
onmessage = m => {
  if(m.data.title == 'start') {
    start.interval = m.data.value.interval;
    start.number = m.data.value.number;
    start.long = m.data.value.long;
    start.time = 0;
    setInterval(() => {
      start.time++;
    }, start.interval);
  }
}
