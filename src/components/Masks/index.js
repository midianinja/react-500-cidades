function socialMidiaMask(value) {
  let str = value;
  return "instagram.com/" + str;
}

// function faceMask(value) {
// //   return "www.facebook.com/" + value;
// }

function phoneMask(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
}

function cepMask(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+?$/, "$1");
}

export { socialMidiaMask, phoneMask, cepMask };
