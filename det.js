window.onload = () => {
  navigator.location.getCurrentposition(sel, del);
}
function sel(pos) {
  alert(pos);
}
function del(er) {
  alert(er);
}
