window.onload = () => {
  navigator.location.getCurrentposition(sel);
}
function sel(pos) {
  alert(pos);
}
