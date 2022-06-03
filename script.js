const apiUrl = 'https://www.thecolorapi.com/';
const input = document.querySelector('input');
const select = document.querySelector('select');
const button = document.querySelector('button');

button.addEventListener('click', getScheme);

function getScheme() {
  const color = input.value.substring(1);
  const scheme = select.value;
  fetch(`${apiUrl}scheme?hex=${color}&mode=${scheme}`)
    .then((res) => res.json())
    .then((data) => setScheme(data));
}

function setScheme(obj) {
  const { colors } = obj;
  const schemeColors = document.querySelector('#scheme-colors');
  const schemeHex = document.querySelector('#scheme-hex');

  schemeColors.innerHTML = colors
    .map((c) => `<div style="background-color:${c.hex.value}"></div>`)
    .join('');

  schemeHex.innerHTML = colors.map((c) => `<div>${c.hex.value}</div>`).join('');
}

getScheme();
