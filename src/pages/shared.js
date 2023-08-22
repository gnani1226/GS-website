let count = 0;

let msg = false;

function change_gnani() {
  msg = !msg;
}
function get_gnani() {
  return msg;
}

function increment() {
  count += 1;
}

function get_count() {
  return count;
}

export { get_count, increment, change_gnani, get_gnani };
