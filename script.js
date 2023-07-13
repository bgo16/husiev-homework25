const input = document.querySelector('.input');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  let href = input.value;
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return (location.href = href);
  } else {
    href = 'http://' + href;
    return (location.href = href);
  }
});
